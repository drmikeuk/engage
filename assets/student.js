var moodleData = [
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


var teamsData = [
  cohort = {
    x: ['19-Oct', '26-Oct',	'02-Nov',	'09-Nov',	'16-Nov', '23-Nov',	'30-Nov',	'07-Dec'],
    y: [3,4,3,4,3, 0, 0 ,0],
    type: 'bar',
    marker: {
      color: 'rgba(204, 204, 204, 0.5)'       // ccc grey + opacity to match box whisker
    }
  },
  student =  {
    x: ['19-Oct', '26-Oct',	'02-Nov',	'09-Nov',	'16-Nov', '23-Nov',	'30-Nov',	'07-Dec'],
      y: [3,3,2,0,0],        //  alice
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


var echoData = [
  cohort = {
    x: ['19-Oct', '26-Oct',	'02-Nov',	'09-Nov',	'16-Nov', '23-Nov',	'30-Nov',	'07-Dec'],
    y: [5,5,5,6,5, 0, 0 ,0],
    type: 'bar',
    marker: {
      color: 'rgba(204, 204, 204, 0.5)'       // ccc grey + opacity to match box whisker
    }
  },
  student =  {
    x: ['19-Oct', '26-Oct',	'02-Nov',	'09-Nov',	'16-Nov', '23-Nov',	'30-Nov',	'07-Dec'],
      y: [5,5,4,0,6],        //  alice
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


var qrData = [
  cohort = {
    x: ['19-Oct', '26-Oct',	'02-Nov',	'09-Nov',	'16-Nov', '23-Nov',	'30-Nov',	'07-Dec'],
    y: [0,0,1,0,0, 0, 0 ,0],
    type: 'bar',
    marker: {
      color: 'rgba(204, 204, 204, 0.5)'       // ccc grey + opacity to match box whisker
    }
  },
  student =  {
    x: ['19-Oct', '26-Oct',	'02-Nov',	'09-Nov',	'16-Nov', '23-Nov',	'30-Nov',	'07-Dec'],
      y: [0,0,0,0,0],        //  alice
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

// call Plotly with target div ID (ie matches html), data (from above), layout & options
Plotly.newPlot("moodle", moodleData, layout, options);
Plotly.newPlot("teams", teamsData, layout, options);
Plotly.newPlot("echo", echoData, layout, options);
Plotly.newPlot("qr", qrData, layout, options);


// ============



/* later grab .activityCount from _this row_ */
var activityCount = 475;
/* box and whisker plus dot: https://stackoverflow.com/questions/45828480/is-it-possible-to-overlay-a-marker-on-top-of-a-plotly-js-box-plot */
var moodleData = [
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


var activityCount = 350;
var teamsData = [
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

var activityCount = 400;
var echoData = [
  {
    // cohort: box and whisker
    x: [475, 0, 0, 150, 200, 210, 300, 350, 380, 390, 420, 430, 440, 450, 460, 470, 472, 475, 478, 480, 482, 485, 486, 487, 490, 490, 500, 520, 550, 600, 630, 650],
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


var activityCount = 0;
var qrData = [
  {
    // cohort: box and whisker
    x: [475, 0, 0, 150, 200, 210, 300, 350, 380, 390, 420, 430, 440, 450, 460, 470, 472, 475, 478, 480, 482, 485, 486, 487, 490, 490, 500, 520, 550, 600, 630, 650],
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



Plotly.newPlot("moodleBoxwhisker", moodleData, layout, options);
Plotly.newPlot("teamsBoxwhisker", teamsData, layout, options);
Plotly.newPlot("echoBoxwhisker", echoData, layout, options);
Plotly.newPlot("qrBoxwhisker", qrData, layout, options);
