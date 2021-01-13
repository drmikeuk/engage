---
layout: default
title: "School 2"
nav: "yes"
sortTitle: "School 2"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/school2.js
---

<div class="container main">
  <h1>School List v2</h1>

  <form class="form-inline">
      <!--<label for="Filter"></label>-->
      <input type="text" class="form-control" id="Filter" size="6" placeholder="Filter...">

      <label for="daysfilters" class="label">Activity</label>
      <div class="btn-group btn-group-toggle" id="daysfilters" data-toggle="buttons">
        <label class="btn btn-outline-primary active" for="All">
          <input type="radio" name="days" id="All" value="All" autocomplete="off" checked> All
        </label>
        <label class="btn btn-outline-primary" for="0-7">
          <input type="radio" name="days" id="0-7" value="0-7" autocomplete="off"> 0-7
        </label>
        <label class="btn btn-outline-primary" for="8-14">
          <input type="radio" name="days" id="8-14" value="8-14" autocomplete="off"> 8-14
        </label>
        <label class="btn btn-outline-primary" for="15-21">
          <input type="radio" name="days" id="15-21" value="15-21" autocomplete="off"> 15-21
        </label>
        <label class="btn btn-outline-primary" for="22-29">
          <input type="radio" name="days" id="22-29" value="22-29" autocomplete="off"> 22-29
        </label>
        <label class="btn btn-outline-primary" for=">30">
          <input type="radio" name="days" id=">30" value=">30" autocomplete="off"> &gt; 30
        </label>
      </div>

      <label for="yearfilters" class="label">Year</label>
      <div class="btn-group btn-group-toggle" id="yearfilters" data-toggle="buttons">
        <label class="btn btn-outline-primary active" for="All">
          <input type="radio" name="days" id="All" value="All" autocomplete="off" checked> All
        </label>
        <label class="btn btn-outline-primary" for="1">
          <input type="radio" name="year" id="0-7" value="1" autocomplete="off"> Y1
        </label>
        <label class="btn btn-outline-primary" for="2">
          <input type="radio" name="year" id="2" value="2" autocomplete="off"> Y2
        </label>
        <label class="btn btn-outline-primary" for="3">
          <input type="radio" name="year" id="3" value="3" autocomplete="off"> Y3
        </label>
      </div>

      <select class="form-control-sm"  id="courseSelect" style="max-width: 330px;">
          <option value="">Filter by course...</option>
          <option value="U6UCMPAI - BSc Hons Computer Science with Artificial Intelligence">U6UCMPAI - BSc Hons Computer Science with Artificial Intelligence</option>
          <option value="U6UCMPAIY - BSc Hons Computer Science and Artificial Intelligence with Year in Industry">U6UCMPAIY - BSc Hons Computer Science and Artificial Intelligence with Year in Industry</option>
          <option value="U6UCMPSC - BSc Hons Computer Science">U6UCMPSC - BSc Hons Computer Science</option>
          <option value="U6UCMPSCY - BSc Hons Computer Science with Year in Industry">U6UCMPSCY - BSc Hons Computer Science with Year in Industry</option>
          <option value="U6UCSCMG - BSc Jt Hons Computer Science and Management">U6UCSCMG - BSc Jt Hons Computer Science and Management</option>  
      </select>
<!--      
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="ActiveToggle" checked>
        <label class="custom-control-label" for="ActiveToggle">Active</label>
      </div>
-->
  </form>






  <table class="table table-hover table-sm" id="DataTable" >
    <thead class="thead-dark">
      <tr>
      <!-- first 2 are hidden; just for filters -->
       <th scope="col">Active</th>
       <th scope="col">Visa</th>
        <th scope="col">Name</th>
        <th scope="col" class="nowrap">Last activity</th>
        <th scope="col">Assign.</th>
        <th scope="col">Flags</th>  
        <th scope="col">EMPLID</th>
        <th scope="col">email</th>
        <th scope="col">phone</th>
        <th scope="col">Tutor</th>
        <th scope="col">Yr</th>
        <th scope="col">Programme</th>
      </tr>
    </thead>
    <tbody>

{% for student in site.data.dummySchool %}
      <tr>
        <!-- hidden col for filters: active -->
        <td>
            {% if student.Resits %}
              no
            {% elsif student.Repeating %}
              no
            {% elsif student.Interupted %}
              no
            {% elsif student.Withdrawn %}
              no
            {% else %}
              active
            {% endif %}
        </td>
        <!-- hidden col for filters: visa -->
        <td>
            {% if student.Tier4 %}     
                visa
            {% else %}
                -               
            {% endif %}
        </td>         

        <td class="nowrap" data-sort="{{student.LastName, student.FirstName}}">{% include nameShort.html %}</td>
        <td class="nowrap">{% include daysSinceLastActivity.html %}</td>
        <td>{% include assignments.html %}</td>
        {% include status.html %}
        <td>{{ student.EMPLID }}</td>
        <td>{{ student.FirstName }}.{{ student.LastName }}@nottingham.ac.uk</td>
        <td>{{ student.phone }}</td>
        <td class="nowrap">{{ student.Tutor }}</td>
        <td>{{ student.Year }}</td>
        <td>{{ student.PlanCode }} - {{ student.Programme }}</td>
      </tr>
{% endfor %}

      </tbody>
    </table>



<p class="foot">NB. Email & phone number columns are hidden but will be exported</p>

</div>
