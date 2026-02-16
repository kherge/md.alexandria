---
aliases:
  - <% await tp.system.prompt("What is the subject?") %>
done: false
when: <% tp.date.now("YYYY-MM-DD HH:mm") %>
tags:
  - record/research
---
> [!tip] Tip
> A research note serves both as the controlling idea and as a [map of content](https://forum.obsidian.md/t/what-is-a-moc/58423) for notes associated to the research topic. When creating other notes for this research topic, make sure that an internal link to this topic is used in the new note.

> [!prompt] Writing Prompt
> What are you researching?

# Notes

```base
filters:
  and:
    - file.hasLink(this.file)
formulas:
  When: if(when, when, file.mtime)
  Title: link(file, aliases[0])
views:
  - type: table
    name: All
    order:
      - formula.When
      - formula.Title
    sort:
      - property: formula.When
        direction: ASC
    columnSize:
      formula.When: 175

```

# Conclusion

> [!prompt] Writing Prompt
> Based on the notes compiled for this research topic, what conclusion did you come to? Did you ultimately find what you were looking for, or is additional research needed to reach a final conclusion?
