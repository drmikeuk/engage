---
layout: default
title: "School"
nav: "yes"
sortTitle: "School"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/school.js
---


<style>

table i         {font-size: 20px; }





.controls             {min-height: 3em}
.dataTables_info      {float: left;}
.dt-buttons           {float:right; padding-right: 1em;}
.btn                  {font-size: 100%}
.dataTables_paginate  {float: right}

.controlsbottom             {min-height: 3em; margin-top:10px}
.foot                       {clear: both; margin-top: 1em; padding-top: 1em; border-top: 2px dashed #ccc}

.form-inline label            {padding-right: 0.7em}
.form-inline input            {margin-right: 2em}
.form-inline .btn-group       {margin-right: 2em}
.form-inline .custom-switch   {margin-right: 1em}
label i                       {padding-right: 0.25em}
</style>




<div class="container main">
  <h1>School List</h1>

  <form class="form-inline">
      <label for="Filter">Filter</label>
      <input type="text" class="form-control" id="Filter" size="6">

      <label for="daysfilters">Last activity</label>
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

      <label for="yearfilters">Year</label>
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


      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="ActiveToggle" checked>
        <label class="custom-control-label" for="ActiveToggle">Active students</label>
      </div>

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
        <th scope="col">Tutor</th>
        <th scope="col">Yr</th>
        <th scope="col">Course</th>
        <th scope="col">Status</th>
        <!-- <th scope="col"></th>  -->
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

        <td class="nowrap">{% include name.html %}</td>
        <td class="nowrap">{% include daysSinceLastActivity.html %}</td>
        <td>{{ student.EMPLID }}</td>
        <td>{{ student.FirstName }}.{{ student.LastName }}@nottingham.ac.uk</td>
        <td>{{ student.phone }}</td>
        <!--<td>{{ student.Engagement }}</td>-->
        <td>{{ student.Tutor }}</td>
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

            {% if student.Tier4 %}   
              <div class="qtip tip-top" data-tip="Student visa">  
                <i class="fas fa-passport"></i>
              </div>  
            {% endif %}

            {{ student.RemoteStudy }}
        </td>   

        <!-- <td><i class="fas fa-chevron-circle-right"></i></td> -->
      </tr>
{% endfor %}

      </tbody>
    </table>



<p class="foot">NB. Email & phone number columns are hidden but will be exported</p>

</div>