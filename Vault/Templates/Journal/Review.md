---
about: "[["
aliases:
  - <% await tp.system.prompt("What did I think about it?") %>
rating: <% await tp.user.choose_rating(tp) %>
when: <% tp.date.now("YYYY-MM-DD HH:mm") %>
tags:
  - journal/review
---
> [!prompt] Writing Prompt
> What did you think about it?
