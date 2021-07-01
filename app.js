

// Button functions
var yaxis = 100
function buttonGo() {
    var fixCostDec = document.getElementById("fixCostDec").value
    var VolInc = document.getElementById("VolInc").value
    var PriceInc = document.getElementById("PriceInc").value
    var DrCostDec = document.getElementById("DrCostDec").value


    console.log("fix Cost Decrease:" + fixCostDec)
    console.log("volumn decrease:" + VolInc)
    console.log("price increase:" + PriceInc)
    console.log("Direct Cost increase:" + DrCostDec)


    // ====== Revenue Bar Chart =======
    var data = [
        {
          x: ["revenue"],
          y: [100],
          type: 'bar'
        }
    ];

    var layout = {
        title: "Revenue",
        height: 600,
        width: 400
    };

    Plotly.newPlot("bar", data, layout);


    // =========Profit Bar Chart ======

    var trace1 = {
        x: ['Cost vs Profit'],
        y: [VolInc],
        name: 'Direct Cost',
        type: 'bar'
      };
      
      var trace2 = {
        x: ['Cost vs Profit'],
        y: [PriceInc],
        name: 'Overheads',
        type: 'bar'
      };

      var trace3 = {
        x: ['Cost vs Profit'],
        y: [DrCostDec],
        name: 'Profit',
        type: 'bar'
      };


      
      var data1 = [trace1, trace2, trace3];
      
      var layout1 = {barmode: 'stack',
                    title: "Cost vs Profit",
                    height: 600,
                    width: 400
                    };
      
      Plotly.newPlot('profitbar', data1, layout1);

}

function buttonReset() {
    document.getElementById("InputFixCost").value = 0
    document.getElementById("VolInc").value = 0
    document.getElementById("PriceInc").value = 0
    document.getElementById("DrCostDec").value = 0

    document.getElementById("outVolInc").value = 0
    document.getElementById("outPriceInc").value = 0
    document.getElementById("outDrCostDec").value = 0
    document.getElementById("fixCostDec").value = 0

    init();
    
}

function init() {
  // ====== Revenue Bar Chart =======
 var data = [
  {
    x: ["revenue"],
    y: [100],
    type: 'bar'
  }
];

var layout = {
  title: "Revenue",
  height: 600,
  width: 400
};

Plotly.newPlot("bar", data, layout);


// =========Profit Bar Chart ======

var trace1 = {
  x: ['Cost vs Profit'],
  y: [30],
  name: 'Direct Cost',
  type: 'bar'
};

var trace2 = {
  x: ['Cost vs Profit'],
  y: [60],
  name: 'Overheads',
  type: 'bar'
};

var trace3 = {
  x: ['Cost vs Profit'],
  y: [10],
  name: 'Profit',
  type: 'bar'
};

var data1 = [trace1, trace2, trace3];

var layout1 = {barmode: 'stack',
              title: "Cost vs Profit",
              height: 600,
              width: 400
              };

Plotly.newPlot('profitbar', data1, layout1);
}