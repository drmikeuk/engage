---
layout: default
title: "Student"
nav: "yes"
sortTitle: "XStudent"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/tutees.js
---

<style>
.datasource         {font-size: 200%}


.outlined div       {border: 1px solid grey}
.outlined .col-md-6 {border: 1px solid blue}
.outlined div > div  {border: 1px dotted red}
</style>

<div class="container main">
  <h1>Student</h1>
  <p>some basic info ...</p>

  <!-- ROW PER DATASOURCE -->
  <div class="row outlined">

    <!-- LEFT -->
    <div class="col-md-3">
      <div class="row">
        <div class="col datasource">
          <!-- LABEL -->
          Moodle
        </div>
      </div>

      <div class="row">
        <div class="col">
          <!-- TILE -->
          tile
        </div>
        <div class="col">
        <!-- TILE -->
        tile
        </div>
      </div>

    </div>


    <!-- MIDDLE -->
    <div class="col-md-6">
      <!-- GRAPH -->
      graph
    </div>


    <!-- RIGHT -->
    <div class="col-md-3">
      <div class="row">
        <div class="col">
          <!-- TREND -->
          my trend
        </div>
        <div class="col">
          <!-- TREND -->
          cohort trend
        </div>
      </div>    

      <div class="row">
        <div class="col">
          <!-- CONTEXT -->
          box whisker
        </div>
      </div>
    </div>

   </div><!-- END DATASOURCE ROW -->

<div class="dummystudent"></div>

</div>
