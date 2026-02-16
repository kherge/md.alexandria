/**
 * Recursively iterates a directory to find templates.
 *
 * @param {TFolder} templatesDir The directory.
 *
 * @return {Promise<TFile[]>} The template vault paths.
 */
const find = async (templatesDir) => {
  let files = [];

  for (const item of templatesDir.children) {
    if (item.name[0] === "_") {
      continue;
    }

    if (item.children) {
      files.push(...(await find(item)));
    } else if (item.extension === "md") {
      files.push(item);
    }
  }

  files.sort((a, b) => a.path.localeCompare(b.path));

  return files;
};

/**
 * Returns a `TFolder` from the vault by its path.
 *
 * @param {string} path The vault path.
 *
 * @return {Promise<TFolder>} The folder.
 */
const folder = async (path) => {
  const folder = app.vault.getAbstractFileByPath(path);

  if (!folder) {
    throw new Error(`No such folder in vault: ${path}`);
  }

  return folder;
}

/**
 * Generates a selection of templates to choose from in a prompt.
 *
 * @param templatesDir The templates vault directory path.
 * @param templateFiles The templates to choose from.
 *
 * @return {[string[], TFile[]]} The selections.
 */
const selections = (templatesDir, templateFiles) => {
  const labels = [];
  const tfiles = [];

  templateFiles
    .forEach(file => {
      const label = file
        .path
        .substring(templatesDir.path.length + 1, file.path.length - 3)
        .split("/")
        .join(" / ");

      labels.push(label);
      tfiles.push(file);
    });

  return [labels, tfiles];
};

/**
 * Prompts for a template to be selected.
 *
 * @param {*} tp The Templater instance.
 * @param {string} templatesDirPath The vault directory path to choose templates from.
 * @param {boolean} deleteOnCancel Delete the new note if no template is selected?
 *
 * @return {string} The template.
 */
module.exports = async (tp, templatesDirPath, deleteOnCancel = false) => {
  const templatesDir = await folder(templatesDirPath);
  const templateFiles = await find(templatesDir);
  const templateFile = await tp.system.suggester(
    ...selections(templatesDir, templateFiles),
    false,
    "Choose a template"
  );

  if (templateFile) {
    return await tp.file.include(templateFile);
  }

  if (deleteOnCancel) {
    await app.vault.delete(tp.config.active_file);
  } else {
    return "";
  }
};