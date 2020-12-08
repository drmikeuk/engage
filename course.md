---
layout: default
title: "Course"
nav: "yes"
sortTitle: "Course"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/tutees.js
---

<div class="container main">
  <h1>Course</h1>

  <div class="row">
   <div class="col-md-6">
      <table class="table table-hover table-sm" id="DataTable">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col" >Last activity</th>
            <!--<th style="width: 6em"> </th> -->
            <th scope="col">Engage</th>    
            <th scope="col">Yr</th>
            <th scope="col">Status</th>
            <!-- <th scope="col"></th>  -->
          </tr>
        </thead>
        <tbody>

    {% for student in site.data.dummyCourse %}
          <tr>
            <td class="nowrap"><a href='student.html'>{{ student.FirstName }} {{ student.LastName }}</a></td>
            <td class="nowrap">
            {% assign days = student.DaysSinceLastActivity | divided_by: 13.0 %}
            {% if  days > 1.0 %}
              <div class="warnBar">{{ student.DaysSinceLastActivity }}</div>
            {% else %}
              <div class="okBar" style="width: {{ days| times: 100 }}%">{{ student.DaysSinceLastActivity }}</div>
            {% endif %}
            </td>
            <td>{{ student.Engagement }}</td>
            <td>{{ student.Year }}</td>
            <td>
              {%if student.FeeStatus == "home"%}
                <div class="qtip tip-top" data-tip="UK fee status">
                  <img class="flag tip" src="images/uk.png" alt="UK fee status"/>
                </div>
              {% elsif student.FeeStatus == "eu" %}
                <div class="qtip tip-top" data-tip="EU fee status">
                  <img class="flag tip" src="images/eu.png" alt="EU fee status"/>
                </div>
              {% elsif student.FeeStatus == "int" %}
                <div class="qtip tip-top" data-tip="International fee status">     
                  <i class="fas fa-globe flag tip"></i>
                </div>
              {% endif %}
              {{ student.Tier4 }}
              {{ student.RemoteStudy }}</td>
            <!-- <td><i class="fas fa-chevron-circle-right"></i></td> -->
          </tr>
    {% endfor %}

          </tbody>
        </table>
      </div>

   <div class="col-md-6 dummygraph">

   </div>
  </div>
</div>
