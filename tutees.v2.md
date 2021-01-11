---
layout: default
title: "Tutees 2"
nav: "yes"
sortTitle: "ATutees 2"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/tutees.js
---

<div class="container main">
  <h1>Tutees v2</h1>

  <table class="table table-hover table-sm" id="DataTable">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col" class="nowrap">Last activity</th>      
        <th scope="col">Assign.</th>
        <th scope="col">Flags</th>  
        <th scope="col">EMPLID</th>
        <th scope="col">Yr</th>
        <th scope="col">Programme</th>        
      </tr>
    </thead>
    <tbody>

{% for student in site.data.dummyTutees %}
      <tr>
        <td class="nowrap">{% include nameShort.html %}</td>
        <td class="nowrap">{% include daysSinceLastActivity.html %}</td>
        <td>{% include assignments.html %}</td>
        {% include status.html %}
        <td>{{ student.EMPLID }}</td>
        <td>{{ student.Year }}</td>
        <td>{{ student.PlanCode }} - {{ student.Programme }}</td>
      </tr>
{% endfor %}

      </tbody>
    </table>

</div>
