/* later grab .activityCount from _this row_ */
var activityCount = 475;
/* later grab ID from _this row_ */
var targetID = 'boxwhisker';

/* box and whisker plus dot: https://stackoverflow.com/questions/45828480/is-it-possible-to-overlay-a-marker-on-top-of-a-plotly-js-box-plot */
var data = [
  {
    // cohort: box and whisker
    x: [475, 0, 0, 50, 200, 210, 300, 350, 380, 390, 420, 430, 440, 450, 460, 470, 472, 475, 478, 480, 482, 485, 486, 487, 490, 490, 500, 520, 550, 600, 630, 650, 700],
    type: 'box',
    marker: {
      color: 'rgb(204, 204, 204)'       // ccc grey
    }
  },
  {
    // this student: dot
    x: [activityCount],
    y: ['trace 0'],                     // ie overlap
    marker: {
      color: 'rgb(27, 42, 107)',        // uon blue4
      size: 15
    }
  }
];

var layout = {
  showlegend: false,
  yaxis: {showticklabels: false},               // hide trace label
  xaxis: {showgrid: false,
          zeroline: false, },                   // hide thick line at x=0
  margin: {l: 5, r: 5, b: 5, t: 0, pad: 4 },    // reduce margins
  height: 50,
  width: 260,

};
var options = {
  staticPlot: true,                  // static image: no hovers, no menu
  responsive: true
}

Plotly.newPlot(targetID, data, layout, options);
