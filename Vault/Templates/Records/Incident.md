---
aliases:
  - <% await tp.system.prompt("What happened?") %>
done: false
when: <% tp.date.now("YYYY-MM-DD HH:mm") %>
tags:
  - record/incident
---
> [!tip] Tip
> An incident is something you want to keep accurate and detailed notes on, tracking when the incident began and whether or not it has been resolved. Think of this as something you would likely want to bring out in a legal setting.

> [!prompt] Writing Prompt
> Describe the stage for this incident.

<% await tp.file.include("[[New Notes]]") %>