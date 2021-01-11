---
layout: default
title: "Course"
nav: "no"
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
            <td class="nowrap">{% include name.html %}</td>
            <td class="nowrap">{% include daysSinceLastActivity.html %}</td>
            <td>{{ student.Engagement }}</td>
            <td>{{ student.Year }}</td>
            {% include status.html %}
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
