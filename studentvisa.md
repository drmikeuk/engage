---
layout: default
title: "Visa"
nav: "yes"
sortTitle: "Visa"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/studentvisa.js
---

<div class="container main">
  <h1>Student Visa List</h1>

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

      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="StudentVisaToggle" checked>
        <label class="custom-control-label" for="StudentVisaToggle">Student visa </label>
      </div>

      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="ActiveToggle" checked>
        <label class="custom-control-label" for="ActiveToggle">Active students</label>
      </div>

      <select class="form-control-sm"  id="schoolSelect">
          <option value="">Filter by school...</option>
          <option value="Economics">Economics</option>
          <option value="Mathematics">Mathematics</option>
      </select>

  </form>






  <table class="table table-hover table-sm" id="DataTable" >
    <thead class="thead-dark">
      <tr>
        <!-- first 2 are hidden; just for filters -->
        <th scope="col">Active</th>
        <th scope="col">Visa</th>

        <th scope="col">Name</th>
        <th scope="col" >Last activity</th>
        <th scope="col">EMPLID</th>
        <th scope="col">email</th>
        <th scope="col">phone</th>
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

        <td class="nowrap">{% include name.html %}</td>
        <td class="nowrap">{% include daysSinceLastActivity.html %}</td>
        <td>{{ student.EMPLID }}</td>
        <td>{{ student.FirstName }}.{{ student.LastName }}@nottingham.ac.uk</td>
        <td>{{ student.phone }}</td>
        <!--<td>{{ student.Engagement }}</td>-->
        <td>{{ student.School }}</td>
        <td>{{ student.Year }}</td>
        <td>{{ student.Course }}</td>
        {% include status.html %}  
        <!-- <td><i class="fas fa-chevron-circle-right"></i></td> -->
      </tr>
{% endfor %}

      </tbody>
    </table>



<p class="foot">NB. Email & phone number columns are hidden but will be exported</p>

</div>
