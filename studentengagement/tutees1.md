---
layout: blank
title: "Tutees"
---

<style>
.nowrap         {white-space: nowrap;}
</style>

<div class="container">
  <h1>Tutees</h1>

  <table class="table  table-hover">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Last activity</th>
        <th scope="col">Engage</th>
        <th scope="col">Yr</th>
        <th scope="col">Course</th>        
        <th scope="col">Fee</th>
        <th scope="col">Tier4?</th>  
        <th scope="col">Remote?</th>
        <th scope="col"></th>  
      </tr>
    </thead>
    <tbody>

{% for student in site.data.dummyTutees %}
      <tr>
        <td class="nowrap">{{ student.FirstName }} {{ student.LastName }}</td>
        <td>{{ student.DaysSinceLastActivity }}</td>
        <td>{{ student.Engagement }}</td>
        <td>{{ student.Year }}</td>
        <td>{{ student.Course }}</td>
        <td>{{ student.FeeStatus }}</td>
        <td>{{ student.Tier4 }}</td>
        <td>{{ student.RemoteStudy }}</td>
        <td><i class="fas fa-chevron-circle-right"></i></td>
      </tr>
{% endfor %}

      </tbody>
    </table>

</div>
