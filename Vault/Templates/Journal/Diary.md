---
aliases:
  - <% await tp.system.prompt("What is the subject?") %>
when: <% tp.date.now("YYYY-MM-DD HH:mm") %>
tags:
  - journal/diary
---
> [!prompt] Writing Prompt
> What is on your mind?
