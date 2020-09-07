---
layout: home
title: "Home"
---


<ul>
  {% comment %} all pages (not just those in nav){% endcomment %}
  {% assign pages = (site.pages | sort: "title" ) %}
  {% for page in pages %}
  <li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></li>
  {% endfor %}
</ul>
