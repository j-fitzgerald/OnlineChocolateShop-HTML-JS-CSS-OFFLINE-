$(document).ready( function() {
	console.log('p2 - p2.js loaded');
	var elementHandle = new Array(17);
	// first name last name

	
	var lengthUsed = 7;

	var errorStatusHandle = $('#answer');

//	$(':submit').on('click', function(e) {
	$('#content').on('click',$('input[type="button"]'), function(e) {
		if($(e.target).val() != 'Submit Order') return;
			elementHandle[0]=$('[name="firstname"]');
			elementHandle[1]=$('[name="lastname"]');
			// address1
			elementHandle[2]=$('[name="address"]');
			// city, state, ZIP
			elementHandle[3]=$('[name="city"]');
			elementHandle[4]=$('[name="state"]');
			elementHandle[5]=$('[name="zip"]');
			// email, phone #
			elementHandle[6]=$('[name="phone"]');
			elementHandle[7]=$('[name="firstnameBill"]');
			elementHandle[8]=$('[name="lastnameBill"]');
			elementHandle[9]=$('[name="addressBill"]');
			elementHandle[10]=$('[name="cityBill"]');
			elementHandle[11]=$('[name="stateBill"]');
			elementHandle[12]=$('[name="zipBill"]');
			elementHandle[13]=$('[name="phoneBill"]');
			elementHandle[14]=$('[name="cardType"]');
			elementHandle[15]=$('[name="cardNum"]');
			elementHandle[16]=$('[name="expiration"]');
	
		console.log('p2 - submit clicked');
		e.preventDefault();
		if (document.getElementById('checkbox').checked){
			lengthUsed = 14;
			console.log('checkbox was checked');
		}
		else{
			lengthUsed = 7;
			}
		console.log(lengthUsed);
		for(var i=0; i < lengthUsed; i++){
			elementHandle[i].removeClass("error");
			errorStatusHandle.text("");
		}
		if (validForm()){
			$('form').serialize();
			$('form').submit();
		}
				

		function validForm(){
			console.log('p2 - valid form check');
			// check for the empty ones
			console.log('p2 - start empty check');
			for (i =0; i < lengthUsed; i++){
				if(isEmpty(elementHandle[i].val())){
					elementHandle[i].addClass("error");
					errorStatusHandle.text("Please enter a valid " + elementHandle[i].attr("name"));
					elementHandle[i].focus();
					console.log('p2 - empty check failed' + i);
					return false;
				}
			}
			
			if (elementHandle[4].val() == "invalid"){
				console.log("no state selected");
				errorStatusHandle.text("Please select a valid State");
				elementHandle[4].focus();
				elementHandle[4].addClass("error");
				return false;
			}
				
			console.log('p2 - phone # check');			
			inpObj = document.getElementById("phone");
			if (inpObj.checkValidity() == false){
				console.log("malformed phone");
				errorStatusHandle.text("Invalid Phone #. Please use ###-###-#### format");
				elementHandle[6].focus();
				elementHandle[6].addClass("error");
				return false;
			}
			
			console.log('p2 - zip check');
			inpObj = document.getElementById("zip");
			if (inpObj.checkValidity() == false){
				errorStatusHandle.text("Please enter 5 digit Zip Code");
				elementHandle[5].focus();
				elementHandle[5].addClass("error");
				return false;
			}
			
			if (document.getElementById('checkbox').checked){
				if (elementHandle[11].val() == "invalid"){
				console.log("no state selected");
				errorStatusHandle.text("Please select a valid State");
				elementHandle[11].focus();
				elementHandle[11].addClass("error");
				return false;
				}
				
				console.log('p2 - zip check');
				inpObj = document.getElementById("zipBill");
				if (inpObj.checkValidity() == false){
					errorStatusHandle.text("Please enter 5 digit Zip Code");
					elementHandle[12].focus();
					elementHandle[12].addClass("error");
					return false;
				}

				inpObj = document.getElementById("phoneBill");
				if (inpObj.checkValidity() == false){
					console.log("malformed phone");
					errorStatusHandle.text("Invalid Phone #. Please use ###-###-#### format");
					elementHandle[13].focus();
					elementHandle[13].addClass("error");
					return false;
				}
			}
			
			if (elementHandle[14].val() == "invalid"){
				errorStatusHandle.text("Please select a card type");
				elementHandle[14].focus();
				elementHandle[14].addClass("error");
				return false;
			}
			
			inpObj = document.getElementById("cardNum");
			if (inpObj.checkValidity() == false){
				errorStatusHandle.text("Card Number should be ####-####-####-#### format");
				elementHandle[15].focus();
				elementHandle[15].addClass("error");
				return false;
			}
			
			if(isEmpty(elementHandle[15].val())){
				errorStatusHandle.text("Please enter your card number");
				elementHandle[15].focus();
				elementHandle[15].addClass("error");
				return false;
			}			
			
			inpObj = document.getElementById("expiration");
			if (inpObj.checkValidity() == false){
				errorStatusHandle.text("Please enter your card expiration date");
				elementHandle[16].focus();
				elementHandle[16].addClass("error");
				return false;
			}		
			
			var year = elementHandle[16].val().substring(3,7);
			var month = elementHandle[16].val().substring(0, 2);
			month = month - 1;
			var d = new Date(year, month);
			var c = new Date();
			console.log("user month: " + month + " user year: " + year);
			console.log("cpu  month: " + c.getMonth() + " cpu year: " + c.getFullYear());
			if (d.getFullYear() - c.getFullYear() < 0){
				errorStatusHandle.text("Your card is expired");
				elementHandle[16].focus();
				elementHandle[16].addClass("error");
				return false;
			}
			else if ((d.getFullYear() - c.getFullYear() == 0) && (d.getMonth() - c.getMonth() < 0)){
				errorStatusHandle.text("Your card is expired");
				elementHandle[16].focus();
				elementHandle[16].addClass("error");
				return false;
			}
			console.log("form is valid form");
			return true;
		}
		
		function isEmpty(fieldValue) {
			console.log("is empty test ", $.trim(fieldValue).length, $.trim(fieldValue));
			return $.trim(fieldValue).length == 0;    
		}

		// copied from stackoverflow.com, not checked or validated for correctness.        
		function isValidEmail(emailAddress) {
			var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			return pattern.test(emailAddress);
		}
		});

	
	$(':reset').on('click', function(e) {
		// clear errors and text
		for(var i=0; i < 9; i++){
			elementHandle[i].removeClass("error");
			elementHandle[i].val("");
		}        
		for(var i=12; i < 15; i++){
			elementHandle[i].removeClass("error");
			elementHandle[i].val("");
		}

		// reset dropdown help w3 schools. Every other attempt failed miserably.
		document.getElementById("state").selectedIndex="0";
		
		// uncheck radio buttons
		// outer loop - all the elements with radio buttons
		// inner for loop is the individual buttons
		for (j = 9; j < 12; j++){
			for (i = 0; i < elementHandle[9].length; i++){
				(elementHandle[j])[i].checked = false;
			}
		}

		// clear the optional unhandled fields
		$('input[name="middlename"]').val("");
		$('textarea[name="medical"]').val('');
		errorStatusHandle.text("");
	});
});