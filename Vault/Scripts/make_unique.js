/**
 * Renames the note to something more unique.
 *
 * @param {*} tp The Templater instance.
 * @param {string} format The naming format to use.
 */
module.exports = async (tp, format = "YYYYMMDDHHmmss") => {
  const name = moment().format(format);
  const path = tp.config.active_file.path.split("/").slice(0, -1).join("/");

  await app.fileManager.renameFile(
    tp.config.active_file,
    `${path}/${name}.md`
  );
};