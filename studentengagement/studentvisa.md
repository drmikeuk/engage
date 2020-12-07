---
layout: blank
title: "Student Visa"
customjs:
  - datatables.min.js
  - studentvisa.js
---

<link rel="stylesheet" type="text/css" href="datatables.min.css">

<style>
body            {font-size: 90%}
h1              {padding-bottom: 20px}
.nowrap         {white-space: nowrap;}

table i         {font-size: 20px; padding-left: 0.5em}

.flag           {height: 24px; width: 24px; vertical-align: middle;  margin-right: 0.5em}
.fa-globe       {font-size: 24px; color: #1D8348; margin-right: 0.5em; padding-left: 0}
.fa-chevron-circle-right {color: #007bff}
.fa-passport    {color:  #ccc; padding-left: 0}

.flagBar    {background: #d80f2a; width: 100%; color: white; padding: 2px 4px;}
.warnBar    {background: #f8c400; width: 100%; padding: 2px 4px;}
.okBar      {background: rgba(0, 155, 189, 0.4); padding: 2px 4px;}

/* Yellow-eyed penguin & opaque uon blue */
.flagBar    {background: #D04E59; width: 100%; color: white; padding: 2px 4px;}
.warnBar    {background: #FAE093; width: 100%; padding: 2px 4px;}
.okBar      {background: rgba(0, 155, 189, 0.4); padding: 2px 4px;}

div.dataTables_wrapper div.dataTables_filter { text-align: left; }

.dataTables_info      {float: left;}
.dataTables_paginate  {}
.controlsbottom             {margin-top:10px}
.filters {display: none}


.form-inline label            {padding-right: 0.7em}
.form-inline input            {margin-right: 2em}
.form-inline .btn-group       {margin-right: 2em}
.form-inline .custom-switch   {margin-right: 1em}
label i                       {padding-right: 0.25em}
</style>




<div class="container">
  <h1>Student Visa v4</h1>

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

      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="StudentVisaToggle" checked>
        <label class="custom-control-label" for="StudentVisaToggle">Student visa </label>
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

        <td class="nowrap"><a href=''>{{ student.FirstName }} {{ student.LastName }}</a>
            {% if student.Resits %}
              (Resits)
            {% endif %}
            {% if student.Repeating %}
              (Repeating)
            {% endif %}
            {% if student.Interupted %}
              (Interupted)
            {% endif %}
            {% if student.Withdrawn %}
              (Withdrawn)
            {% endif %}                
        </td>

        <td class="nowrap">
            {% assign days = student.DaysSinceLastActivity | divided_by: 13.0 %}
            {% if days > 2.3 %}
                <div class="flagBar">{{ student.DaysSinceLastActivity }}</div>
            {% elsif days > 1.0 %}
                <div class="warnBar">{{ student.DaysSinceLastActivity }}</div>
            {% else %}
              <div class="okBar" style="width: {{ days| times: 100 }}%">{{ student.DaysSinceLastActivity }}</div>
            {% endif %}
        </td>
        <td>{{ student.EMPLID }}</td>
        <!--<td>{{ student.Engagement }}</td>-->
        <td>{{ student.School }}</td>
        <td>{{ student.Year }}</td>
        <td>{{ student.Course }}</td>
        <td>
            {%if student.FeeStatus == "home"%}
              <img class="flag" src="uk.png"/>
            {% elsif student.FeeStatus == "eu" %}
              <img class="flag" src="eu.png"/>
            {% elsif student.FeeStatus == "int" %}     
              <i class="fas fa-globe"></i>
            {% endif %}

            {% if student.Tier4 %}     
                <i class="fas fa-passport"></i>
            {% endif %}

            {{ student.RemoteStudy }}
        </td>   

        <!-- <td><i class="fas fa-chevron-circle-right"></i></td> -->
      </tr>
{% endfor %}

      </tbody>
    </table>

<hr/>
<p>NB. Email & phone number columns are hidden but will be exported</p>

</div>
