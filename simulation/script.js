var interval = 1000;
var clk_hex = "0x00";
var state_c = 0;
var state_g = 0;
var state_e = 0;
var state_p=0;

function generateCode() {
  var CLK1 = document.getElementById("CLK").value;

  if(CLK1 == 8){
    clk_hex = "0x72";
  }
  else if(CLK1 == 4){
    clk_hex = "0x62";
  }
  else if(CLK1 == 2){
    clk_hex = "0x52";
  }
  else if(CLK1 == 1){
    clk_hex = "0x42";
  }
  else if(CLK1 == 500){
    clk_hex = "0x32";
  }
  else if(CLK1 == 250){
    clk_hex = "0x22";
  }
  else if(CLK1 == 125){
    clk_hex = "0x12";
  }
  else{
    clk_hex = "0x00";
  }

  var code_1 = "#include <pic18fregs.h>\n#include <delay.h>\n\n";
  code_1 += "#pragma config XINST=OFF\n#pragma config FOSC = INTOSCIO_EC\n#pragma config WDT = OFF\n#pragma config LVP = OFF\n\n";
  code_1 += "#define LED_TRIS_Output TRISDbits.TRISD0\n";
  code_1 += "#define LED_LAT_Output LATDbits.LATD0\n\n";
  code_1 += "void main(void)\n{\n";

  var code = "  OSCCON = "+ clk_hex + ";\n";
  
  var code_2 = "  LED_TRIS_Output=0;\n  LED_LAT_Output=0;\n";
  code_2 += "  while(1)\n  {\n";
  code_2 += "         LED_LAT_Output = !LED_LAT_Output; //LED toggle\n";
  code_2 += "         delay1ktcy(100); \n";
  code_2 += "  }\n}";


  document.getElementById("code_1").value = code_1;
  document.getElementById("code").value = code;
  document.getElementById("code_2").value = code_2;
  alert("Code generated successfully!");
  state_g =1;
}

document.getElementById("compile-btn").addEventListener("click", async () => {
  let filename = (document.getElementById("code_1").value + document.getElementById("code").value + document.getElementById("code_2").value) || "experiment_2";
  const response = await fetch("http://192.168.1.45:8081/compile", {
    method: "POST",
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/text'
    },
    body: filename,
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    console.error(errorMessage);
    alert("code has errors");
    return;
  }
  var hexFilePath = await response.text();
  document.getElementById("code_log").value = hexFilePath;
  console.log(hexFilePath);

  state_c = 1;
  // display hex file path on the webpage
});

function showcompilemsg() {
  if (state_g == 1)
  {
    alert("Check Terminal Window below Simulation for errors")
    state_g = 0;
  }
  else
  {
    alert("Please generate the code first");
  }
}

document.getElementById("execute-btn").addEventListener("click", async () => {
  var req = new XMLHttpRequest();
  req.open("GET", "http://192.168.1.45:8081/execute", true);
  req.responseType = "";
  req.onload = function (event) {
    if (req.status != 200) return;
    var blob = JSON.parse(req.responseText);
    if( blob == 72){
      interval = 100;
  
    }
    else if(blob == 62){
      interval = 200;
    }
    else if(blob == 52){
      interval = 400;
  
    }
    else if(blob == 42){
      interval = 800;
    }
    else if(blob == 32){
      interval = 1600;
    }
    else if(blob == 22){
      interval = 3200;
    }
    else if(blob == 12){
      interval = 6400;
    }
    else{
      interval = 1000;
    }

  }
  req.send();
  pause();
  state_e =1;
  state_p=0;
  // document.write(delayy);
});

function showSavedMessage() {
  if (state_c == 1)
  {
    alert("Clock has been set");
    state_c = 0;
  }
  else
  {
    alert("Please compile the code first");
  }
}


document.getElementById("download-code-btn").addEventListener("click", async () => {
  var req = new XMLHttpRequest();
  req.open("GET", "http://192.168.1.45:8081/download", true);
  req.responseType = "blob";
  req.onload = function (event) {
    if (req.status != 200) return;
    var blob = req.response;
    var fileName = "exp_1_code.c" //if you have the fileName header available
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };
  req.send();
});

document.getElementById("download-op-btn").addEventListener("click", async () => {
  var req = new XMLHttpRequest();
  req.open("GET", "http://192.168.1.45:8081/HEX", true);
  req.responseType = "blob";
  req.onload = function (event) {
    if (req.status != 200) return;
    var blob = req.response;
    var fileName = "exp_1_code.hex" //if you have the fileName header available
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };
  req.send();
});


var images = [
  "exp_1_off.png",
  "exp_1_on.png"
];

var currentImage = 0;
var intervalId;
function updateImage() {
  var img = document.getElementById("myImage");
  img.src = images[currentImage];
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
}

function startImage() {
  updateImage();
  intervalId = setInterval(updateImage,interval);
}

function stopImage() {
  var img = document.getElementById("myImage");
  img.src = "exp_1_off.png";
  currentImage = 0;
  clearInterval(intervalId);
}

var data = [{
  x: [],
  y: [],
  mode: 'lines',
  line: {
    color: '#80CAF6'
  }
}];

var layout = {
  responsive: true,
  width: 900,
  height: 300,
  title: 'Clock in Real Time',
  xaxis: {
    range: [0, 10],
    title: 'Time (s)'
  },
  yaxis: {
    range: [-0.2, 6.0],
    title: 'Volatge (in V)'
  }
};

var interval_plot;
var time = 0;
function reset() {
    Plotly.deleteTraces('plot',0);
      // Plotly.newPlot('plot', [],[]);
      var time = 0;
      state_p=1;
      
      stopImage();
  } 
function pause(){
  stopImage();
  clearInterval(interval_plot);
}


var dt = 0.01;
var y = 1;
state_p=0;
  Plotly.newPlot('plot', data, layout);

  function start(){
    if(state_e == 1 && state_p==0){
  startImage();
   interval_plot = setInterval(function() {
  time += dt;
  if (time % (0.002*interval) < (0.001*interval)) {
    y = 0;
  } else {
    
    y = 5;
  }
  Plotly.extendTraces('plot', {x: [[time]], y: [[y]]}, [0]);
  if (time > 10) {
    Plotly.relayout('plot', {
      xaxis: {
        range: [time-10, time]
      }
    });
  }
}, dt*1000);
start_e =0;
}
else{
  alert("Please excute the code in simulation")
}
}