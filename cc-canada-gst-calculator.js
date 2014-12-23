/*
Author: Calculators Canada
Author URI: http://gstcalculator.ca/
*/

var $J = jQuery.noConflict();

var gstRate = 5; 

$J( document ).ready(function() {
	// runtime events
	
	$J(".canada-including-gst").keydown(function(event) {
		if(!(isDecimalKey(event,this.value))) event.preventDefault();
	});	

	$J(".canada-including-gst").keyup(function( ) {
		calculate_canada_gst(this.id, parseFloat(this.value), $J(this).closest("aside").attr("id"));
	});

	$J(".canada-excluding-gst").keydown(function(event) {
		if(!(isDecimalKey(event,this.value))) event.preventDefault();
	});	

	$J(".canada-excluding-gst").keyup(function( ) {
		calculate_canada_gst(this.id, parseFloat(this.value), $J(this).closest("aside").attr("id"));
	});

	$J(".canada-gst").keydown(function(event) {
		if(!(isDecimalKey(event,this.value))) event.preventDefault();
	});	

	$J(".canada-gst").keyup(function( ) {
		calculate_canada_gst(this.id, parseFloat(this.value), $J(this).closest("aside").attr("id"));
	});

	$J(".canada-clear").click(function( ) {
		clear_canada_gst_values($J(this).closest("aside").attr("id"));
	});


});

function clear_canada_gst_values(widget_id)
{
	$J('#' + widget_id + '-gst').val("");
	$J('#' + widget_id + '-including-gst').val(""); 
	$J('#' + widget_id + '-excluding-gst').val("");
};

function calculate_canada_gst(id, value, widget_id)
{
    	// if no data entered
	if (isNaN(value) || value == "") {
	    clear_canada_gst_values(widget_id);
	    return;    
	}

	var GSTID = widget_id + '-gst';
	var GSTinclusiveID = widget_id + '-including-gst';
	var GSTexclusiveID = widget_id + '-excluding-gst';

		var GSTinclusive = 0, GSTexclusive = 0, GST = 0;
		switch(id) {
			case GSTID:
				GST = value;
				GSTexclusive = GST * 100 / gstRate;
				GSTinclusive = GSTexclusive + GST;	
				break;
			case GSTinclusiveID:
                GSTinclusive = value;
                GST = GSTinclusive * gstRate / (100 + gstRate);
                GSTexclusive = GSTinclusive - GST;			
				
				break;
			case GSTexclusiveID:
                GSTexclusive = value;
                GST = GSTexclusive * gstRate / 100;
                GSTinclusive = GSTexclusive + GST;			
				break;
		}

		if(id != GSTID) $J('#' + GSTID).val(round2TwoDecimals(GST));
		if(id != GSTinclusiveID) $J('#' + GSTinclusiveID).val(round2TwoDecimals(GSTinclusive));
		if(id != GSTexclusiveID) $J('#' + GSTexclusiveID).val(round2TwoDecimals(GSTexclusive));
   
};


function isIntegerKey(evt)	  
      {
         var key = evt.which || evt.which || event.keyCode;
		 // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
		 var isInteger = (key == 8 || 
                key == 9 ||
                key == 46 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
		return isInteger;
				
      };
	  
function isDecimalKey(e, number)
      {
         var key = (e.which) ? e.which : e.keyCode;
		 // numbers (48-57 and 96-105), dot (110,190), comma (44,188), backspace(8), tab (9), navigation keys (35-40), DEL(46)
		 if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 110 || key == 190 || key == 8 || key == 9 || (35 <= key && key <= 40) || key == 46 )  
		 	{
			 		  if (key == 110 || key == 190)
					  {
					   	 // skip it if comma or decimal point already entered or it is empty field yet
						 if (number.indexOf(".") > -1 || number.indexOf(",") > -1 || number.length == 0) 
						 	return false; 
					  }
			          return true;
			}

         return false;
      };

function radioValue(element)	  
		 {
		    var returnValue = "";
            var radios = document.getElementsByName(element);
            
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    returnValue = radios[i].value;
                }
			}
			return returnValue;	
		 };	  	
function round2TwoDecimals(number)
		 {
 		    return Math.round(number*100)/100						 
		 };	
 



