---
layout: default
title: "Student"
nav: "yes"
sortTitle: "XStudent"
customjs:
  - /vendor/plotly-latest.min.js
  - /assets/boxwhisker.js
  - /assets/barchart.js
---

<style>
/* SOURCE ROW */
.datasource         {line-height: 1.2; padding-bottom: 10px; border-bottom: 4px solid #eee; }

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
.me                 {color: #1a296b }  /* uon blue 4 */
.cohort             {color: #ccc}  /* grey */
.trend              {padding-left: 50px; font-size: 0.8rem; color: #333; }
.trend i            {position: absolute; top: 0; left: 5px; }

</style>

<div class="container main">
  <h1>Student</h1>
  <p style="margin-bottom: 3rem">some basic info ...</p>

  <!-- ROW PER DATASOURCE -->
  <div class="row datasource ">

    <!-- LEFT -->
    <div class="col-md-3">
      <div class="row">
        <div class="col dataname">
          <!-- LABEL -->
          Moodle
        </div>
      </div>

      <div class="row">
        <div class="col">
          <!-- TILE -->
          <div class="tile">
            <p class="title">Last login</p>
            <p class="number">3</p>
            <p class="label">days ago</p>
          </div>
        </div>
        <div class="col">
          <!-- TILE -->
          <div class="tile">
            <p class="title">Activity to date</p>
            <p class="number activityCount">475</p>
            <p class="label">total clicks</p>
          </div>
        </div>
      </div>

    </div>


    <!-- MIDDLE -->
    <div class="col-md-6">
      <!-- GRAPH -->
      <div class="barchart" id="barchart"></div>
    </div>


    <!-- RIGHT -->
    <div class="col-md-3">
      <div class="row">
        <div class="col trend">
          <!-- TREND -->
          <i class="fas fa-arrow-down fa-3x me"></i>
          <b>student</b><br/>
          less active vs previous 2wks
        </div>
        <div class="col trend">
          <!-- TREND -->
          <i class="fas fa-minus fa-3x cohort"></i> <!-- <i class="fas fa-arrow-up"></i>-->  
          <b>cohort</b><br/>
          similar activity
        </div>
      </div>    

      <div class="row">
        <div class="col">
          <!-- CONTEXT -->

          <div class="boxwhisker" id="boxwhisker">Total activity compared to cohort:</div>
        </div>
      </div>
    </div>

   </div><!-- END DATASOURCE ROW -->



</div>
