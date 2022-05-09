// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);


    // Bar data and layout
    Plotly.newPlot();
    
    // Bubble.
    Plotly.newPlot();
   
    
    // Trace for gauge data 
    var gaugeData = [
     
    ];
    
    //Layout for gauge 
    var gaugeLayout = { 
     
    };

    // Plotting data.
    Plotly.newPlot();
  });
}
