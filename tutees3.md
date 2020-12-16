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
        <th scope="col" >Last activity</th>
        <!--<th style="width: 6em"> </th> -->
        <!--<th scope="col">Engage</th>-->
        <th scope="col">EMPLID</th>
        <th scope="col">Yr</th>
        <th scope="col">Course</th>        
        <th scope="col">Status</th>
        <!-- <th scope="col"></th>  -->
      </tr>
    </thead>
    <tbody>

{% for student in site.data.dummyTutees %}
      <tr>
        <td class="nowrap">{% include name.html %}</td>
        <td class="nowrap">{% include daysSinceLastActivity.html %}</td>
        <!--<td>{{ student.Engagement }}</td>-->
        <td>{{ student.EMPLID }}</td>
        <td>{{ student.Year }}</td>
        <td>{{ student.Course }}</td>
        <td class="nowrap">
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
