---
layout: default
title: "Tutees 1"
nav: "yes"
sortTitle: "ATutees 1"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/tutees.js
---

<div class="container main">
  <h1>Tutees</h1>

  <table class="table table-hover table-sm" id="DataTable">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col" >Last activity</th>
        <!--<th style="width: 6em"> </th> -->
        <!--<th scope="col">Engage</th>-->
        <th scope="col">EMPLID</th>
        <th scope="col">Yr</th>
        <th scope="col">Programme</th>        
        <th scope="col">Status</th>
        <!-- <th scope="col"></th>  -->
      </tr>
    </thead>
    <tbody>

{% for student in site.data.dummyTutees %}
      <tr>
        <td class="nowrap">{% include nameShort.html %}</td>
        <td class="nowrap">{% include daysSinceLastActivity.html %}</td>
        <!--<td>{{ student.Engagement }}</td>-->
        <td>{{ student.EMPLID }}</td>
        <td>{{ student.Year }}</td>
        <td>{{ student.PlanCode }} - {{ student.Programme }}</td>
        {% include status.html %}
        <!-- <td><i class="fas fa-chevron-circle-right"></i></td> -->
      </tr>
{% endfor %}

      </tbody>
    </table>

</div>
