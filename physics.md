---
layout: default
title: "Physics"
nav: "yes"
sortTitle: "School 4"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/physics.js
---

<style>
/* temp overide */
/* Yellow-eyed penguin & opaque uon blue */
.flagBarX    {background: #fff; width: 100%; color: black; padding: 2px 4px;}
.warnBarX    {background: #fff; width: 100%; padding: 2px 4px;}
.okBarX      {background: #fff; padding: 2px 4px;}

/* hide until loaded */
#DataTable {display:none}


</style>

<div class="container main">
  <h1>Physics school list</h1>

  <form class="form-inline" id="filters">
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
        <label class="btn btn-outline-primary" for="4">
          <input type="radio" name="year" id="4" value="4" autocomplete="off"> Y4+
        </label>
      </div>

      <select class="form-control-sm"  id="courseSelect" style="max-width: 300px;">
        <option value="">Filter by course...</option>

        <option value="U6UMTHPY">	U6UMTHPY - BSc Hons Mathematical Physics	</option>
        <option value="U6UPHYAS">	U6UPHYAS - BSc Hons Physics with Astronomy	</option>
        <option value="U6UPHYASN1">	U6UPHYASN1 - Physics and Astronomy - No Award - Year	</option>
        <option value="U6UPHYELY">	U6UPHYELY - BSc Hons Physics with European Language	</option>
        <option value="U6UPHYMP">	U6UPHYMP - BSc Hons Physics with Medical Physics	</option>
        <option value="U6UPHYNA">	U6UPHYNA - BSc Hons Physics with Nanoscience	</option>
        <option value="U6UPHYPL">	U6UPHYPL - BSc Jt Hons Physics and Philosophy	</option>
        <option value="U6UPHYSC">	U6UPHYSC - BSc Hons Physics	</option>
        <option value="U6UPHYSI">	U6UPHYSI - BSc Hons Physics (4 year part-time)	</option>
        <option value="U6UPHYTA">	U6UPHYTA - BSc Hons Physics with Theoretical Astrophysics	</option>
        <option value="U6UPHYTP">	U6UPHYTP - BSc Hons Physics with Theoretical Physics	</option>
        <option value="U6UPHYYI">	U6UPHYYI - BSc Hons Physics with a Year in Industry	</option>
        <option value="U7PMLSCI">	U7PMLSCI - MSc Machine Learning in Science	</option>
        <option value="U7UMTHPY">	U7UMTHPY - MSci Hons Mathematical Physics	</option>
        <option value="U7UPHYAS">	U7UPHYAS - MSci Hons Physics with Astronomy	</option>
        <option value="U7UPHYELY">	U7UPHYELY - MSci Hons Physics with European Language	</option>
        <option value="U7UPHYMP">	U7UPHYMP - MSci Hons Physics with Medical Physics	</option>
        <option value="U7UPHYNA">	U7UPHYNA - MSci Hons Physics with Nanoscience	</option>
        <option value="U7UPHYSC">	U7UPHYSC - MSci Hons Physics	</option>
        <option value="U7UPHYTA">	U7UPHYTA - MSci Hons Physics with Theoretical Astrophysics	</option>
        <option value="U7UPHYTP">	U7UPHYTP - MSci Hons Physics with Theoretical Physics	</option>
        <option value="U7UPHYYI">	U7UPHYYI - MSci Hons Physics with a Year in Industry	</option>               
      </select>
<!--      
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="ActiveToggle" checked>
        <label class="custom-control-label" for="ActiveToggle">Active</label>
      </div>
-->
  </form>



<p id="loading">Loading data...</p>




  <table class="table table-hover table-sm" id="DataTable" >
    <thead class="thead-dark">
      <tr>
      <!-- first 2 are hidden; just for filters -->
       <th scope="col">Active</th>
       <th scope="col">Visa</th>
        <th scope="col">Name</th>
        <th scope="col" class="nowrap">Last activity</th>
    <th scope="col">Active</th>   
    <th scope="col">Change</th>
        <th scope="col">Late</th>
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

{% for student in site.data.physics %}
      <tr>
        <!-- hidden col for filters: active -->
        <td>
            {% if student.Resits %}
              no
            {% elsif student.Repeating %}
              no
            {% elsif student.Interrupted %}
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

        <td class="nowrap" data-sort="{{student.LastName}} {{student.FirstName}}">{% include nameShort.html %}</td>
        <td class="nowrap">{% include daysSinceLastActivity.html %}</td>
    <td>{{ student.Active }}
    {%if student.Bottom == "10"%}
      <div class="qtip tip-top" data-tip="bottom 10%">
        <i class="fas fa-angle-down"></i>
      </div>
    {% endif %}
    {%if student.Bottom == "5"%}
      <div class="qtip tip-top" data-tip="bottom 5%">
        <i class="fas fa-angle-double-down"></i>
      </div>
    {% endif %}
    </td>
    <td>
    {%if student.Change%}
    <div class="qtip tip-top" data-tip="drop in activity last 2wks"><i class="fas fa-arrow-down"></i></div>{{ student.Change }}%
    {% endif %}
    </td>    
        <td>{% include assignments3.html %}</td>
        {% include status.html %}
        <td>{{ student.EMPLID }}</td>
        <td>{{ student.FirstName }}.{{ student.LastName }}@nottingham.ac.uk</td>
        <td>{{ student.phone }}</td>
        <td class="nowrap">{{ student.Tutor }}</td>
        <td>{{ student.Year }}</td>
        <td class="truncateXXX">{{ student.PlanCode }}</td>
      </tr>
{% endfor %}

      </tbody>
    </table>



<p class="foot">NB. Email & phone number columns are hidden but will be exported</p>

</div>
