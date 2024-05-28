
//function mainPage1(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     $("#canvas-div1").html('');
      $("#centerText1").html('PIN DIAGRAM FOR PIC18F4550 MICROCONTROLLER');
      $("#centerText2").html('CONFIGURATION');
 			var htm = '<center><img src="images/chipImg.png" class="img-fluid" style="width: 80%;" ></center>'
	     $("#canvas-div1").html(htm);
	
 
var selection = '<div class="row">'
	+ '<div class="col-sm-4" id="FreqLbl" >'
	+ '<label class="labelstyle">Select Clock Frequency :</label>'
	+ '</div>'
	+ '<div class="col-sm-6">'
	+ '<select  class="form-control selectConf" id="fqVal"  style="height:auto;" >'
	+ '<option value="0">--- Select Clock Frequency ---</option>'
	+ '<option value="1">1 MHz</option>'
	+ '<option value="2">2 MHz</option>'
	+ '<option value="3">4 MHz</option>'
	+ '<option value="4">8 MHz</option>'
	+ '<option value="5">16 MHz</option>'
	+ '<option value="6">20 MHz</option>'
	+ '<option value="7">24 MHz</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-2">'
	+ '</div>'
	+ '</div>'
	
	+ '<div class="row selectConf">'
	+ '<div class="col-sm-4">'
	+ '<label class="labelstyle " > Enter Total Delay(mS) :</label>'
	+ '</div>'
	+ '<div class="col-sm-6">'
	+ '<input type="number" id="timeVAl"  placeholder="Enter Vlaue between 1 to 1000" class=" form-control marginBottom"  disabled >'	
	+ '</div>'
	+ '<div class="col-sm-2">'
	+ '</div>'
	+ '</div>'

//	+ '<div class="row selectConf" >'
//	+ '<div class="col-sm-5">'
//	+ '<label class="labelstyle">Enter ON Delay Time(ms) :  </label>'
//	+ '</div>'
//	+ '<div class="col-sm-4" >'
//	+ '<input type="number" id="onDly"   class=" form-control marginBottom"   >'	
//	+ '</div>'
//	+ '<div class="col-sm-3">'
//	+ '</div>'
//	+ '</div>'
	
	+ '<div class="row selectConf" >'
	+ '<div class="col-sm-4">'
	+ '<label class="labelstyle">Enter ON-OFF Delay(mS) :</label>'
	+ '</div>'
	+ '<div class="col-sm-3" >'
	+ '<input type="number" id="onDly" placeholder="ON Delay"  class=" form-control marginBottom"  disabled >'	
	+ '</div>'
	+ '<div class="col-sm-3" >'
	+ '<input type="number" id="offDly"  placeholder="OFF Delay" class=" form-control marginBottom"  disabled >'	
	+ '</div>'
	+ '<div class="col-sm-2">'
	+ '<button type="button"  class="btn btn-danger btnStyle" id="submitDelayBtn" data-toggle="modal"  disabled><b>SUBMIT</b></button>'
	+ '</div>'
	+ '</div>'
	
	+ '<div class="row selectConf" >'
	+ '<div class="col-sm-4" id="pinSelection" >'
	+ '<label class="labelstyle">Select Pin :</label>'
	+ '</div>'
	+ '<div class="col-sm-6">'
	+ '<select  class="form-control selectConf" id="pinName"  style="height:auto;" disabled>'
	+ '<option value="0">--- Select Pin ---</option>'
	+ '<option value="1" name="RD0">RD0</option>'
	+ '<option value="2" name="RD1">RD1</option>'
	+ '<option value="3" name="RD2">RD2</option>'
	+ '<option value="4" name="RD3">RD3</option>'
	+ '<option value="5" name="RD4">RD4</option>'
	+ '<option value="6" name="RD5">RD5</option>'
	+ '<option value="7" name="RD6">RD6</option>'
	+ '<option value="8" name="RD7">RD7</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-2">'
	+ '</div>'
	+ '</div>'
	
	+ '<div class="row selectConf" >'
	+ '<div class="col-sm-4" id="ledSelect" >'
	+ '<label class="labelstyle">Select LED Configuration :</label>'
	+ '</div>'
	+ '<div class="col-sm-6">'
	+ '<select  class="form-control selectConf" id="ledtype"  style="height:auto;" disabled>'
	+ '<option value="0">--- Select Pin ---</option>'
	+ '<option value="1" >Current Sourcing</option>'
//	+ '<option value="2" >Current Sinking</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-2">'
	+ '</div>'
	+ '</div>'
	
//	+ '<div class="row selectConf"  >'
//	+ '<div class="col-sm-6" id="buttonDiv">'
//	+ '<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#myModal" ><b>CHECK CONFIGURATION</b></button>'
//	+ '</div>'
////	+ '</div>'
	
//	+ '<div class="row" selectConf>'
//	+ '<div class="col-sm-12" id="buttonDiv">'
//	+ '<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="generateCode" data-toggle="modal" data-target="#myModal" ><b>GENERATE CODE</b></button>'
//	+ '</div>'
//	+ '</div>'

//	+ '<div class="row" selectConf>'
//	+ '<div class="col-sm-3" id="buttonDiv">'
//	+ '<button type="button" class="btn btn-danger btnStyle" id="generateCode" data-toggle="modal" data-target="#myModal" disabled><b>GENERATE CODE</b></button>'
//	+ '</div>'
//	+ '<div class="col-sm-3" id="buttonDiv">'
//	+ '<button type="button" class="btn btn-success btnStyle" id="compileCode" data-toggle="modal" data-target="#myModal" disabled><b>COMPILE</b></button>'
//	+ '</div>'
//	+ '<div class="col-sm-3" id="buttonDiv">'
//	+ '<button type="button" class="btn btn-success btnStyle" id="executeCode" data-toggle="modal" data-target="#myModal" disabled><b>EXECUTE</b></button>'
//	+ '</div>'
//	+ '<div class="col-sm-3" id="buttonDiv">'
//	+ '<button type="button" class="btn btn-primary btnStyle" id="downloadCode" data-toggle="modal"  disabled><i class="fa fa-download"></i> <b>DOWNLOAD</b></button>'
//	+ '</div>'
//	+ '</div>'

+ '<div class="row" selectConf>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-danger btnStyle button5" id="generateCode" data-toggle="modal" data-target="#myModal" disabled><b>GENERATE CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button4" id="compileCode" data-toggle="modal" data-target="#myModal" disabled><b>COMPILE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button4" id="executeCode" data-toggle="modal" data-target="#myModal" disabled ><b>EXECUTE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-primary btnStyle button2" id="downloadCode" data-toggle="modal"  disabled><i class="fa fa-download"></i> <b>DOWNLOAD</b></button>'
	+ '</div>'
	+ '</div>'
	
	

    + '<div class="row  selectConf" id="codeview"   hidden>'
    + '<div class="col-sm-12" >'
    + '<p id="demo" style="margin-top:10px ;border-style: double;"></p>'
    + '</div>'
    + '</div>'
    
    + '<div class="row  selectConf" id="errorview"   hidden>'
    + '<div class="col-sm-12" >'
    + '<p id="errordemo" style="margin-top:10px ; border-style: double;"></p>'
    + '</div>'
    + '</div>'


	+ ' <!-- Modal -->'
	+ '<div class="modal fade" id="myModal" role="dialog">'
	+ ' <div class="modal-dialog modal-md">'
	+ '    <div class="modal-content">'
	+ '     <div class="modal-header">'

	+ '       <h4 class="modal-title">Message box</h4>'
	+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
	+ '     </div>'
	+ '     <div class="modal-body">'
	+ '       <p id="modelMsg"></p>'
	+ '     </div>'
	+ '     <div class="modal-footer">'
	+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
	+ '     </div>'
	+ '   </div>'
	+ ' </div>'
	+ '</div>'
	+ '</div>'
	+ '</div>'
	+ ' </div>'
$("#main-div-conf").html(selection);

var fqSelect;
var timeSelect;
var onDlySelect;
var offDlySelect;
var pinSelect;
var LedConSelect;

var id=0;
var enteredfreq;
$("#fqVal").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		enteredfreq =parseInt( $("#fqVal").val());
		if(enteredfreq<=0){
			alert("Select Frequency.");
//			$("#modelMsg").html("<b class='boldTextRed'>Select Frequency.</b>");
		}else{		  
		  $("#timeVAl").prop("disabled",false);			  
 		  $("#fqVal").prop("disabled",true);
// 		  toastr.success("Correct Answer");		 
		}
		
		
	});


var enteredT=0;
$("#timeVAl").change(function(){
		$("body").css("padding","0px 0px 0px 0px");			
		enteredT = $("#timeVAl").val();
		if(enteredT==""){
//			$("#modelMsg").html("<b class='boldTextRed'>Enter Numeric Value.</b>");	
			alert("Enter Numeric Value.");
			
		}else{
			enteredT=parseInt($("#timeVAl").val());
			console.log("enteredT : "+enteredT)
			 if(enteredT>=1 && enteredT<=1000){						
				$("#onDly").prop("disabled",false);
				$("#offDly").prop("disabled",false);
				$("#submitDelayBtn").prop("disabled",false);
				$("#timeVAl").prop("disabled",true);
//			$("#modelMsg").html("<b class='boldTextRed'>Correct Answer.</b>");		
//			alert("Correct Answer.");	
//			toastr.success("Correct Answer");							
			}else{	
//				toastr.warning("Enter Appropraite Value Between 1-1000 ms");
				alert("Enter Appropraite Value Between 1-1000 ms");			
//				$("#modelMsg").html("<b class='boldTextRed'>Enter Appropraite Value Between 1-1000 ms</b>");
			}
	 }	
	
	});

console.log("enteredT= "+enteredT);
var EnteredONdly=0;
$("#onDly").change(function(){		
		$("body").css("padding","0px 0px 0px 0px");	
		EnteredONdly = parseInt($("#onDly").val());
		if(EnteredONdly==""){
//			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value.</b>");	
			alert("Enter Numeric Value.");
		}else{							
			$("#offDly").prop("disabled",false);
//			toastr.success("Correct Answer");
		}
});

var enteredOffDly=0;
$("#offDly").change(function(){		
		$("body").css("padding","0px 0px 0px 0px");	
		enteredOffDly = parseInt($("#offDly").val());
		if(enteredOffDly==""){
//			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value.</b>");	
			alert("Enter Numeric Value.");
		}else{				
			$("#submitDelayBtn").prop("disabled",false);
//			toastr.success("Correct Answer");
		}
});

var id1=0;
var tDelay=EnteredONdly+enteredOffDly;
console.log("enteredT= "+enteredT+" , tDelay= "+tDelay+", on = "+EnteredONdly+",off = "+enteredOffDly);
//var tDelay=EnteredONdly+enteredOffDly;

$("#submitDelayBtn").click(function(){
	tDelay=parseInt(EnteredONdly)+parseInt(enteredOffDly);
	console.log("tDelay"+tDelay+"= "+EnteredONdly+" + "+enteredOffDly);	
		$("body").css("padding","0px 0px 0px 0px");
		if(enteredOffDly=="" && EnteredONdly==""){

			alert("Enter numeric value.");
		}else{
			if (id1 <= 2) {
				if (tDelay==enteredT){
					$("#pinName").prop("disabled",false);
					$("#onDly").prop("disabled",true);
					$("#offDly").prop("disabled",true);
					$("#submitDelayBtn").prop("disabled",true);
					id1=0;
//					toastr.success("Correct Answer");

				} else if (tDelay!=enteredT){
					alert("Entered ON delay or OFF delay value is incorrect.Try again.");
				}
			} else if (id1 == 3){
				
				alert("Formula: Total Delay = ON Delay + OFF Delay");
			} else {
				tDelay=EnteredONdly+enteredOffDly	
				if (tDelay==enteredT) {
					$("#pinName").prop("disabled",false);
					$("#onDly").prop("disabled",true);
					$("#offDly").prop("disabled",true);
					$("#submitDelayBtn").prop("disabled",true);
					id1=0;
//					toastr.success("Correct Answer");

				} else {
					alert("Correct Answer of ON Delay is "+EnteredONdly+" and OFF Delay is "+enteredOffDly+" ");
//					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer of ON Delay is "+EnteredONdly+" and OFF Delay is "+enteredOffDly);
				}
			}
			id1++;
		}
});


var pinVAl;
$("#pinName").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		pinVAl = $("#pinName").val();
		if(pinVAl<=0){
//			$("#modelMsg").html("<b class='boldTextRed'>Select Appropraite Pin.</b>");
			alert("Select Appropraite Pin.");
		}else{		  
		  $("#ledtype").prop("disabled",false);			  
 		  $("#pinName").prop("disabled",true);
// 		  toastr.success("Correct Answer");		 
		}
		
		
	});

var ledTypeVAl;
$("#ledtype").change(function(){
	$("body").css("padding","0px 0px 0px 0px");	
		ledTypeVAl = $("#ledtype").val(); 
		if(ledTypeVAl<=0){
//			$("#modelMsg").html("<b class='boldTextRed'>Select Appropraite Pin.</b>");
			alert("Select LED Connection Type.");
		}else{	
		  $("#generateCode").prop("disabled",false);
		  $("#compileCode").prop("disabled",false);
		  $("#executeCode").prop("disabled",false);
		  $("#downloadCode").prop("disabled",false);	  
		  $("#ledtype").prop("disabled",true);			  
// 		  toastr.success("Correct Answer");		 
		}
		
})





	var flag = false;

$("#generateCode").click(function () {
	
	$("#modelMsg").html("<b class='boldTextGreen'>Code Generated Successfully.</b>");
	flag=true;
		
	$("#codeview").prop("hidden",false);
	hexValue = calculateHex();
	var currentdate = new Date(); 
    var datetime = "Date: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " Time "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

//document.write(datetime);
	if(EnteredONdly!=enteredOffDly){

	console.log(".........."+EnteredONdly+" and "+enteredOffDly);
	var a11=''
		+'<p>LED_LAT_Output = 1; //LED toggle ON Delay</p>'
        +'<p>ON_delay(<span class="greenCode">'+$("#onDly").val()+'</span>); </p>'
		+'<p>LED_LAT_Output= 0; //LED toggle OFF Delay</p>'
        +'<p>OFF_delay(<span class="greenCode">'+$("#offDly").val()+'</span>); </p>'
		+'<p>}</p>'
        +'<p>}</p>'
	}else{
		console.log("--------"+EnteredONdly+" and "+enteredOffDly);
    var a11=''   
    	+'<p>LED_LAT_Output != LED_LAT_Output; //LED toggle</p>'
        +'<p>delay1ktcy(<span class="greenCode">'+$("#onDly").val()+'</span>); </p>'
        +'<p>}</p>'
        +'<p>}</p>'
	}
	var a ='<p>'+datetime+'</p><br><br>'	
    +'<p class="codeheaderfile">#include&#60;pic18fregs.h&#62; <br>#include&#60;delay.h&#62; </p>'
//        +'<p class="codeheaderfile">#include&#60;delay.h&#62;</p>'
        +'<p>#pragma config XINST=OFF</p>'
        +'<p>#pragma config FOSC = INTOSCIO_EC</p>'
        +'<p>#pragma config WDT = OFF</p>'
        +'<p>#pragma config LVP = OFF</p>'
        +'<p>#define LED_TRIS_Output TRISDbits.<span class="greenCode">TRISD'+($("#pinName").val() - 1)+'</span></p>'
        +'<p>#define LED_LAT_Output LATDbits.<span class="greenCode">LATD'+($("#pinName").val() - 1)+'</span></p>'
        +'<p>void main(void)</p>'
        +'<p>{</p>'
        +'<p>  OSCCON = <span id="hexValue">' + hexValue + '</span>;</p>'
        +'<p>  LED_TRIS_Output=0;</p>'
        +'<p>  LED_LAT_Output=0;</p>'
        +'<p>  while(1)</p>'
        +'<p>  {</p>'+a11;
	
        
    
    $("#demo").html(a);

    $("#errorview").prop("hidden",false);
   	var b = '<b class="blink_text">_</b><br><br><br><br><br><br><br>'
	$("#errordemo").html(b);

});

var compileflag=false;
$("#compileCode").click(function(){
	
	compileflag=true;
	if(flag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Check Terminal Window Below Code for Errors.</b>");
		var b1 = '<b>Program Compiled Successfully.</b><br><br><br><br><br><br><br>'
		$("#errordemo").html(b1);
	}else{
		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First.</b>");
	}
});
 

$("#executeCode").click(function () {
	
	if(compileflag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Code Executed Successfully.</b>");
			fqSelect = $("#fqVal").val();
			timeSelect = $("#timeVAl").val();
			onDlySelect = $("#onDly").val();
			offDlySelect= $("#offDly").val();
			pinSelect=$('#pinName').val();
			LedConSelect = $("#ledtype").val();
			$("#canvas-div").html('');
			$("#canvas-div1").html('');
			mimic(fqSelect,timeSelect,onDlySelect,offDlySelect,pinSelect,LedConSelect);
    
	}else{
		$("#modelMsg").html("<b class='boldTextGreen'>Please Compile The Code First</b>");
	}
	
	
 
});

  var doc = new jsPDF();
	var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
   

$("#downloadCode").click(function () {
	 if(flag==true){
			doc.fromHTML($('#demo').html(), 15, 15, {
        	'width': 170,
            'elementHandlers': specialElementHandlers
    		});
    		doc.save('sourcecode.pdf');
//			$("#modelMsg").html("<b class='boldTextGreen'>Download Code File Successfully.</b>");	
	}else{
//		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First and Then You Can Download Code File.</b>");
		alert("Please Generate The Code First and Then You Can Download Code File.")
	}

 
});


//$(document).ready(function () {
    // Function to calculate hex value and update the input field
    function calculateHex() {
        var frequency = $("#fqVal").val();
        var hexValue;

        // Perform conversion based on selected frequency 
        switch (parseInt(frequency)) {
            case 1:
                hexValue = "0x42"; // Example value for 1 MHz
                break;
            case 2:
                hexValue = "0x52"; // Example value for 2 MHz
                break;
            case 3:
                hexValue = "0x62"; // Example value for 4 MHz
                break;

            case 4:
                hexValue = "0x72"; // Example value for 8 MHz
                break;
            case 5:
                hexValue = "0x12"; // Example value for 125 MHz
                break;
            case 6:
                hexValue = "0x22"; // Example value for 250 MHz
                break;
            case 7:
                hexValue = "0x32"; // Example value for 500 MHz
                break;
            // Add more cases for other frequencies as needed
            default:
                hexValue = "Unknown"; // Default value if frequency is not recognized
        }
		return hexValue;
        // Update the input field with the calculated hex value
//        $("#hexValue").val(hexValue);
    }


//}
