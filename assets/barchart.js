/* later grab .activityCount from _this row_ */
var activityCount = 475;
/* later grab ID from _this row_ */
var targetID = 'barchart';

var data = [
  cohort = {
    x: ['19-Oct', '26-Oct',	'02-Nov',	'09-Nov',	'16-Nov', '23-Nov',	'30-Nov',	'07-Dec'],
    y: [24,	26,	30,	24,	22, 0, 0 ,0],
    type: 'bar',
    marker: {
      color: 'rgba(204, 204, 204, 0.5)'       // ccc grey + opacity to match box whisker
    }
  },
  student =  {
    x: ['19-Oct', '26-Oct',	'02-Nov',	'09-Nov',	'16-Nov', '23-Nov',	'30-Nov',	'07-Dec'],
      y: [23,	27,	29,	25,	24],        //  alice
    //y: [12,	10,	14,	10,	9],            // ben
    type: 'scatter',
    //mode: 'lines',                    // hides marker dots
    line: {shape: 'hvh'},               // stepped not linear
    marker: {
      color: 'rgb(27, 42, 107)',        // uon blue4
      line: {
        color: 'rgb(27, 42, 107)', // uon blue4
        width: 2
      }
    }
  }
];

var layout = {
  showlegend: false,
  yaxis: {showgrid: false},
  margin: {l: 5, r: 5, b: 20, t: 0, pad: 4 },    // reduce margins
  bargap: 0,
  barmode: 'overlay',
  height: 160,
  width: 540,

};
var options = {
  staticPlot: true,                  // static image: no hovers, no menu
  responsive: true
}

Plotly.newPlot(targetID, data, layout, options);
