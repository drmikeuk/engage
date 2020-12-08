---
layout: default
title: "Tutees"
nav: "yes"
sortTitle: "ATutees"
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
        <th scope="col" >No activity</th>
        <!--<th style="width: 6em"> </th> -->
        <!--<th scope="col">Engage</th>-->
        <th scope="col">Yr</th>
        <th scope="col">Course</th>        
        <th scope="col">Status</th>
        <!-- <th scope="col"></th>  -->
      </tr>
    </thead>
    <tbody>

{% for student in site.data.dummyTutees %}
      <tr>
        <td class="nowrap"><a href=''>{{ student.FirstName }} {{ student.LastName }}</a></td>
        <td class="nowrap">
        {% assign days = student.DaysSinceLastActivity | divided_by: 13.0 %}
        {% if  days > 1.0 %}
          <div class="warnBar">{{ student.DaysSinceLastActivity }}</div>
        {% else %}
          <div class="okBar" style="width: {{ days| times: 100 }}%">{{ student.DaysSinceLastActivity }}</div>
        {% endif %}
        </td>
        <!--<td>{{ student.Engagement }}</td>-->
        <td>{{ student.Year }}</td>
        <td>{{ student.Course }}</td>
        <td>
          {%if student.FeeStatus == "home"%}
            <img class="flag" src="images/uk.png"/>
          {% elsif student.FeeStatus == "eu" %}
            <img class="flag" src="images/eu.png"/>
          {% elsif student.FeeStatus == "int" %}     
            <i class="fas fa-globe"></i>
          {% endif %}
            {{ student.Tier4 }}
            {{ student.RemoteStudy }}</td>
        <!-- <td><i class="fas fa-chevron-circle-right"></i></td> -->
      </tr>
{% endfor %}

      </tbody>
    </table>

</div>
