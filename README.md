Your personal vault of Alexandria.

# Vault Design

This is an opinionated [Obsidian](https://obsidian.md) [vault](https://help.obsidian.md/manage-vaults), preconfigured for immediate use.

To get started:

1. Install Obsidian.
2. Grab a copy of this vault and unzip it.
3. Open the folder as a vault in Obsidian.

## Taking Notes

All notes in the vault are kept in the `Notes/` folder, are uniquely named, and are created using a template. To create a new note, use the `Command + N` (macOS) or `CTRL + N` (Windows) keyboard shortcut to create a new note. You will be prompted to select a template and answer a few questions, depending on the template you have chosen.

### Timestamped Notes

For some templates, there is a **Notes** section which contains dated headers and timestamped bullets. Instead of manually writing new subheadings or bullet timestamps, two additional shortcuts are provided to simplify the process:

- `Command + Enter` or `CTRL + Enter` for a new bullet.
- `Command + Shift + Enter` or `CTRL + Shift + Enter` for a new subheading.

## Community Plugins

The vault heavily depends on two community plugins for its core functionality:

- [Templater](https://github.com/SilentVoid13/Templater)
    - This plugin enables the use of advanced templates and scripts, which serve as the core benefit of using this vault. All templates are stored in the `Vault/Templates` folder, and the custom scripts for the vault are stored in `Vault/Scripts`.
- [Virtual Link / Glossary](https://github.com/vschroeter/obsidian-virtual-linker)
    - This plugin is intended to be used as an alternative to relying on internal links everywhere. The general advice is that an internal link to another note should only be used if [referential integrity](https://en.wikipedia.org/wiki/Referential_integrity) is required to make sense of the note. For example. If you use the Graph core plugin, following this advice will yield a cleaner graph.