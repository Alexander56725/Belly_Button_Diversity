// Bar and Bubble charts
    // 1. Creating the bubble chart.c
    var bubbleData=[ {
      x: otuIds,
      y: otuVals,
      text: otuLabs,
      mode: "markers", 
      marker: {
        size: otuVals,
        color: otuIds,
        colorscale: "Electric",
      }}];

  // 2. Creating  layout for  bubble chart.
  var bubbleLayout = {
    title:"Bacteria Cultures Per Sample",
    hovermode: "closest",
    yaxis: {title: "Number of Species Found"},
    xaxis: {title: "OTU ID"}
  };

  // 3. Use Plotly to plot the data with the layout.
  Plotly.newPlot ("bubble", bubbleData, bubbleLayout);

  // 4. Creating  trace for the gauge chart.
    var washFrequency= parseFloat(metaArray[0].wfreq);
    var gaugeData = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: washFrequency,
      title:{ text: "Belly Button Washing Frequency<br>per Week"},
      type: "indicator",
      mode: "gauge+number+delta",
      gauge: {
        axis: { range: [null,10], visible:true},
        bar: {color:"black"},
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "yellowgreen" },
          { range: [8, 10], color: "green" } ]  
      }
    }];   
    //console.log(washFrequency);
 
  // 5. Creating layout for the gauge
  var gaugeLayout = { width: 475
    , height: 450, margin: { t: 0, b: 0 }};

  // 6. Plotly
  Plotly.newPlot('gauge', gaugeData, gaugeLayout);
}); 
}
