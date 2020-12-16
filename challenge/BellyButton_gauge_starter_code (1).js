// 1. Create a variable that filters the metadata array for the object with the desired sample number.
var metadata = data.metadata; 
  
// 2. Create a variable that holds the first sample in the metadata array.
var resultGauge = metadata.filter(sampleObj => sampleObj.id == samples); 
var results = resultGauge[0];

// 3. Create a variable that holds the washing frequency.
 var washing= parseFloat(result.wfreq)

 // 4. Create the trace for the gauge chart.
 var data = [
   {
     domain: { x: [0, 1], y: [0, 1] },
     value: washing,
     title: { text: "Belly Button Washing Frequency" },
     type: "indicator",
     mode: "gauge+number",
     delta: { reference: 400 },
     gauge: { axis: { range: [null, 500] } }
   }
 ];
 
 // 5. Create the layout for the gauge chart.
 var layout = { 
   width: 600,
   height: 400,
 };

 // 6. Use Plotly to plot the gauge data and layout.
 Plotly.newPlot('gauge'+ data, layout);