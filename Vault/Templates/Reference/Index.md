---
aliases:
  - <% await tp.system.prompt("What is this index?") %>
tags:
  - reference/index
---
> [!tip] Tip
> A [Base](https://help.obsidian.md/bases) is used to represent an index. You are advised to start by adjusting the filters to only include relevant notes. From there, consider changing the properties used in the view to show more immediately relevant information.

> [!prompt] Writing Prompt
> What is the purpose of this index?

```base
formulas:
  Note: link(file, aliases[0])
views:
  - type: table
    name: All
    order:
      - formula.Note
```