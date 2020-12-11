/* later grab .activityCount and draw dot */
var activityCount = 7;

/* box and whisker */
var data = [{
  x: [1, 2, 3, 4, 4, 4, 8, 9, 10],
  type: 'box',
  marker: {
    color: 'rgb(204, 204, 204)'       // ccc grey
  }
}];


var layout = {
  showlegend: false,
  yaxis: {showticklabels: false},               // hide trace label
  xaxis: {showgrid: false},                     // hide gridlines
  margin: {l: 5, r: 5, b: 5, t: 5, pad: 4 },    // reduce margins
  height: 90,
  width: 260,

};
var options = {
  staticPlot: true,                  // static image: no hovers, no menu
  responsive: true
}

Plotly.newPlot('boxwhisker', data, layout, options);
