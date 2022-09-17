function getvalX(num , mul) 
	{
        const urlParams = new URLSearchParams(window.location.search);
        x_axis  = parseFloat(urlParams.get("work")) //right
    
	 var value = [ ];
	 for(i=0;i<=num;i++)
	 {
	  var rand = Math.random() * mul;
	  value.push(x_axis);
	 }
	 return value;
	}

function getvalY(num , mul) 
	{
        const urlParams = new URLSearchParams(window.location.search);
        y_axis  = parseFloat(urlParams.get("trad")) //auth
    
	 var value = [ ];
	 for(i=0;i<=num;i++)
	 {
	  var rand = Math.random() * mul;
	  value.push(y_axis);
	 }
	 return value;
	}

function getvalZ(num , mul) 
	{
        const urlParams = new URLSearchParams(window.location.search);
        z_axis  = parseFloat(urlParams.get("gest")) //prog
    
	 var value = [ ];
	 for(i=0;i<=num;i++)
	 {
	  var rand = Math.random() * mul;
	  value.push(z_axis);
	 }
	 return value;
	}

function generateAxis(){
    var emptyAxis = [ ];
    for(i=0; i<=200; i++)
    {
        emptyAxis.push(-100+i);
    }
    return emptyAxis;
}

function generateZeros(){
    var emptyZeros = [ ];
    for(i=0; i<=200; i++)
    {
        emptyZeros.push(0);
    }
    return emptyZeros;
}

var xLine = {
    x: generateAxis(),
    y: generateZeros(),
    z: generateZeros(),
    
    name: 'X Axis - Lavoro',
    mode: 'lines',
    line: {
        color: '#000000',
        width: 2
    },
    type: 'scatter3d'
};

var yLine = {
        x: generateZeros(),
        y: generateAxis(),
        z: generateZeros(),
        name:'Y Axis - Tradizione',
        mode: 'lines',
        line: {
          color: '#000000',
          width: 2
        },
        type: 'scatter3d'
      };
    
var zLine = {
        x: generateZeros(),
        y: generateZeros(),
        z: generateAxis(),
        name:'Z Axis - Partecipazione',
        mode: 'lines',
        line: {
          color: '#000000',
          width: 2
        },
        type: 'scatter3d'
      };

var data=[
    {
     opacity:0.4,type: 'scatter3d',
     x: getvalX(8 , 1),
     y: getvalY(20 , 1),
     z: getvalZ(30 , 1),
     mode:'markers'
    },
    xLine,
    yLine,
    zLine
];

var layout = {
    
        autosize: false,
        width: 1850,
        height: 1000,  
    
        scene:{
        aspectmode: "manual",
        aspectratio: {
          x: 0.85, y: 0.85, z: 0.85,
          },
          xaxis: {
            title: 'Formazione',
            nticks: 10,
            range: [-10, 10],
            backgroundcolor: "rgb(200, 200, 230)",
            gridcolor: "rgb(255, 255, 255)",
            showbackground: true,
            zerolinecolor: "rgb(255, 255, 255)",
            xanchor:"center"
        },
        yaxis: {
            title: 'Innovazione',
            nticks: 10,
            range: [-10, 10],
            backgroundcolor: "rgb(230, 200,230)",
            gridcolor: "rgb(255, 255, 255)",
            showbackground: true,
            zerolinecolor: "rgb(255, 255, 255)"
        },
            
        zaxis: {
            title: 'Partecipazione',
        nticks: 10,
        range: [-10, 10],
        backgroundcolor: "rgb(230, 230,200)",
        gridcolor: "rgb(255, 255, 255)",
        showbackground: true,
        zerolinecolor: "rgb(255, 255, 255)"
        }},
      };

Plotly.newPlot('myDiv', data, layout, {displaylogo:false});