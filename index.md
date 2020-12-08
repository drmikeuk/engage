---
layout: home
title: "Home"
---


<ul>
  {% assign pages = site.pages | where: "nav","yes" | sort: "sortTitle"  %}
  {% for page in pages %}
  <li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></li>
  {% endfor %}
</ul>
