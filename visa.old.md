---
layout: blank
title: "Tier4"
customjs:
  - datatables.min.js
  - tutees.js
---

<link rel="stylesheet" type="text/css" href="datatables.min.css">

<style>
body            {font-size: 90%}
.nowrap         {white-space: nowrap;}
.flag           {height: 24px; width: 24px; vertical-align: middle;  margin-right: 0.5em}
.fa-globe       {font-size: 24px; color: #1D8348; margin-right: 0.5em}
.fa-chevron-circle-right {color: #007bff}

.warnBar    {background: #f8c400; width: 100%;}
.okBar      {background: rgba(0, 155, 189, 0.4) }

div.dataTables_wrapper div.dataTables_filter { text-align: left; }
</style>




<div class="container">
  <h1>Tier4 v3</h1>

  <button type="button" class="btn btn-primary">All</button>
  <button type="button" class="btn btn-outline-secondary"> &lt;7 </button>
  <button type="button" class="btn btn-outline-secondary"> &lt;14 </button>
  <button type="button" class="btn btn-outline-secondary"> &lt;21 </button>
  <button type="button" class="btn btn-outline-secondary"> &lt;30 </button>

  <table class="table table-hover table-sm" id="DataTable" >
    <thead class="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col" >Last activity</th>
        <!--<th style="width: 6em"> </th> -->
        <!--<th scope="col">Engage</th>   -->
        <th scope="col">School</th>
        <th scope="col">Yr</th>
        <th scope="col">Course</th>
        <th scope="col">Status</th>
        <!-- <th scope="col"></th>  -->
      </tr>
    </thead>
    <tbody>

{% for student in site.data.dummyTier4 %}
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
        <td>{{ student.School }}</td>
        <td>{{ student.Year }}</td>
        <td>{{ student.Course }}</td>
        <td>
        <!--
          {%if student.FeeStatus == "home"%}
            <img class="flag" src="uk.png"/>
          {% elsif student.FeeStatus == "eu" %}
            <img class="flag" src="eu.png"/>
          {% elsif student.FeeStatus == "int" %}     
            <i class="fas fa-globe"></i>
          {% endif %}  -->
            {{ student.Tier4 }}
            {{ student.RemoteStudy }}</td>
        <!-- <td><i class="fas fa-chevron-circle-right"></i></td> -->
      </tr>
{% endfor %}

      </tbody>
    </table>

</div>
