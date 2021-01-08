---
layout: default
title: "Student"
nav: "yes"
sortTitle: "XStudent"
customjs:
  - /vendor/plotly-latest.min.js
  - /assets/student.js
---

<style>
/* SOURCE ROW */
.datasource         {line-height: 1.2; padding: 15px 0; border-bottom: 3px solid #F8F9F9; }

/* TITLE */
.dataname           {font-size: 2rem; line-height: 1; margin-bottom: 1rem}

/* TILE */
.tile               {text-align: center; line-height: 1; padding: 0.4rem; borderX: 1px solid #ddd; background: #efefef}
.tile .title        {font-size: 0.8rem; margin-bottom: 0.4rem; color: #333}
.tile .number       {font-size: 3.5rem; font-weight: 300; margin-bottom: 0.4rem}
.tile .label        {font-size: 0.7rem; margin-bottom: 4px; color: #666; }

/* lighter tile */
.tile               {border: 2px solid #eee; background: #fff}
.tile .title        {color: #111}
.tile .label        {color: #707070; }


/* BOX WHISKER */
.boxwhisker         {font-size: 0.8rem; margin-top: 1.5rem; color: #333}

/* GRAPH */
.barchart           {}

/* TREND */
.student            {color: #1a296b }  /* uon blue 4 */
.cohort             {color: #ccc}  /* grey */
.trend              {padding-left: 50px; font-size: 0.8rem; color: #333; }
.trend i            {position: absolute; top: 0; left: 5px; }
.labelXX              {font-size: 0.7rem; color: #666; }

</style>

<div class="container main">
  <h1>Student</h1>
  <p style="margin-bottom: 3rem">put some basic info at the top ...</p>

  {% for datasource in site.data.dummyStudent %}
  {% include datasource.html %}
  {% endfor %}


</div>
