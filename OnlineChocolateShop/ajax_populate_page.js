/*  We load the global array proj4_data once, then use it as needed
    to retrieve product information.
    
    The Milk Chocolate handler is done the old-fashion way, with an 
    'onclick' call in the xhtml code.  The rest of the buttons have 
    handlers assigned the correct way.
    
    Alan Riggins
    CS545
    Fall 2016
*/    


var proj4_data;

$(document).ready(function() {
    proj4_data = new Array();
	cartArray = new Array();
	var total = 0;
	
    $.get('/perl/jadrn014/proj4/get_products.cgi', storeData);

    var cart = new shopping_cart("jadrn014");
	update_cart();
	
	
	$('#milk').on('click', function() {
        tmpString = "";
		tmpString += "<h2 id='sub_head'>Milk Chocolate</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
				tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
					proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
					" width=\"200px\"  /><br />";            
					tmpString += "<b>" +proj4_data[i][2] + "</b><br />";
					for(var j=3; j < proj4_data[i].length; j++){
						if (j==6) tmpString+="$"
						if (j!=5){
							tmpString += proj4_data[i][j] + "<br />";
						}
					}
				tmpString += "<table class='hide'><tr><td>";
				tmpString += "<input type='button' name="+proj4_data[i][0]+
				" value='Add to Cart' index= " + i + " class='buy ui-button ui-widget ui-corner-all'/>";                
				tmpString += "<span class='hide_span'>Added to Cart</span></td></tr></table><br /><hr />";
			}
		}
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

	$('#dark').on('click', function() {
        tmpString = "";
		tmpString += "<h2 id='sub_head'>Dark Chocolate</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
				tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
					proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
					" width=\"200px\"  /><br />";            
					tmpString += "<b>" +proj4_data[i][2] + "</b><br />";
					for(var j=3; j < proj4_data[i].length; j++){
						if (j==6) tmpString+="$"
						if (j!=5){
							tmpString += proj4_data[i][j] + "<br />";
						}
					}
				tmpString += "<table class='hide'><tr><td>";
				tmpString += "<input type='button' name="+proj4_data[i][0]+
				" value='Add to Cart' index= " + i + " class='buy ui-button ui-widget ui-corner-all'/>";                
				tmpString += "<span class='hide_span'>Added to Cart</span></td></tr></table><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
        
    $('#nuts').on('click', function() {   
        tmpString = "";
		tmpString += "<h2 id='sub_head'>Nuts and Chews</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
				tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";                     
					tmpString += "<b>" +proj4_data[i][2] + "</b><br />";
					for(var j=3; j < proj4_data[i].length; j++){
						if (j==6) tmpString+="$"
						if (j!=5){
							tmpString += proj4_data[i][j] + "<br />";
						}
					}
				tmpString += "<table class='hide'><tr><td>";
				tmpString += "<input type='button' name="+proj4_data[i][0]+
				" value='Add to Cart' index= " + i + " class='buy ui-button ui-widget ui-corner-all'/>";                
				tmpString += "<span class='hide_span'>Added to Cart</span></td></tr></table><br /><hr />";
			}
		}
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
    $('#brittle').on('click', function() {
        tmpString = "";
		tmpString += "<h2 id='sub_head'>Brittles and toffies</h2>";
			for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
				tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
					tmpString += "<b>" +proj4_data[i][2] + "</b><br />";
					for(var j=3; j < proj4_data[i].length; j++){
						if (j==6) tmpString+="$"
						if (j!=5){
							tmpString += proj4_data[i][j] + "<br />";
						}
					}
            tmpString += "<table class='hide'><tr><td>";
			tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' index= " + i + " class='buy ui-button ui-widget ui-corner-all'/>";                
			tmpString += "<span class='hide_span'>Added to Cart</span></td></tr></table><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
		
	$('#truffles').on('click', function() {
        tmpString = "";
		tmpString += "<h2 id='sub_head'>Truffles</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
				tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
					tmpString += "<b>" +proj4_data[i][2] + "</b><br />";
					for(var j=3; j < proj4_data[i].length; j++){
						if (j==6) tmpString+="$"
						if (j!=5){
							tmpString += proj4_data[i][j] + "<br />";
						}
					}
            tmpString += "<table class='hide'><tr><td>";
			tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' index= " + i + " class='buy ui-button ui-widget ui-corner-all'/>";
			tmpString += "<span class='hide_span'>Added to Cart</span></td></tr></table><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
		
	$('#gifts').on('click', function() {
        tmpString = "";
		tmpString += "<h2 id='sub_head'>Gifts</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
				tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
					tmpString += "<b>" +proj4_data[i][2] + "</b><br />";
					for(var j=3; j < proj4_data[i].length; j++){
						if (j==6) tmpString+="$"
						if (j!=5){
							tmpString += proj4_data[i][j] + "<br />";
						}
					}
            tmpString += "<table class='hide'><tr><td>";
			tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' index= " + i + " class='buy ui-button ui-widget ui-corner-all'/>";
			tmpString += "<span class='hide_span'>Added to Cart</span></td></tr></table><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
		
	$('#holiday').on('click', function() {
        tmpString = "";
		tmpString += "<h2 id='sub_head'>Holiday Assortments</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
				tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
					tmpString += "<b>" +proj4_data[i][2] + "</b><br />";
					for(var j=3; j < proj4_data[i].length; j++){
						if (j==6) tmpString+="$"
						if (j!=5){
							tmpString += proj4_data[i][j] + "<br />";
						}
					}
            tmpString += "<table class='hide'><tr><td>";
			tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' index= " + i + " class='buy ui-button ui-widget ui-corner-all'/>"; 
			tmpString += "<span class='hide_span'>Added to Cart</span></td></tr></table><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
		
	$('#home').on('click', function() {
        tmpString = "";
		tmpString += "<h2 id='sub_head'>Enjoy limited time discounts during our holiday sale</h2>" +
			"<p>Please check out our finest chocolates, toffies, nuts, and other assortments</p>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
		
	$('#about').on('click', function() {
        tmpString = "";
		tmpString += "<h2 id='sub_head'>Founded in 1902, we're California's premier candy shop</h2>";
		tmpString += "<p>Inspired by the finest European Chocalatiers, our founder set out to " +
		"bring back the rich chocolate flavors found in France, Switzerland and Belgium</p>" +
		"<p>We have expanded our pallette to include fine English style Toffies</p>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

	$('#contact').on('click', function() {
        tmpString = "";
		tmpString += "<h2 id='sub_head'>Feel free to contact us with questions, comments and suggestions</h1><br/>";
		tmpString += "<h3>Downtown San Diego</h3><p>123 Main St</p></p>San Diego, CA 92111</p><br/>";
		tmpString += "<h3>Torrey Highlands</h3><p>456 Rancho Penasquitos</p></p>San Diego, CA 92122</p><br/>";
		tmpString += "<h3>By Phone</h3><p>555-123-4567</p><br/>";
		tmpString += "<h3>By Email</h3><p>contact@berthaschocolate.com</p><br/>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
        
	$('#content').on('click',$('input[type="button"]'), function(e) {
		if($(e.target).val() != 'Add to Cart') return;
		var sku = $(e.target).attr("name");
				var index = $(e.target).attr("index");
			console.log(index);
		cart.add(sku, 1, index);
		update_cart();
		});
       
		
    $(document).on('click', ".buy", function() {  
        $(this).next().fadeIn(50).fadeOut(2000);
        });

	function update_cart(){
		tmpString = cart.size();
		count.innerHTML = tmpString;
		}		
		
	$('#cart').on('click', function() {
		display_cart();
        });
		
	$('.clear_cart').on('click', function() {
	    cart.clearCookie();
		tmpString = "Cart cleared!";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
		update_cart();
        });
		
	$('#content').on('click',$('input[type="button"]'), function(e) {
		if($(e.target).val() != 'Empty Cart') return;
	    cart.clearCookie();
		tmpString = "Cart cleared!";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
		update_cart();
		});
		
	$('#content').on('click',$('input[type="button"]'), function(e) {
		if($(e.target).val() != '+') return;
		var sku = $(e.target).attr("name");
		cart.add(sku, 1);
		update_cart();
		display_cart();
		});
	
	$('#content').on('click',$('input[type="button"]'), function(e) {
		if($(e.target).val() != '-') return;
		var sku = $(e.target).attr("name");
		cart.add(sku, -1);
		if (cart.retQty(sku) == 0){
			cart.delete(sku);
			}
		update_cart();
		display_cart();
		});
		
	$('#content').on('click',$('input[type="button"]'), function(e) {
		if($(e.target).val() != 'Clear') return;
		var sku = $(e.target).attr("name");
		cart.delete(sku);
		update_cart();
		display_cart();
		});
		
	function display_cart(){
		cartArray = cart.getCartArray();
		total = 0;
		tmpString = "<table class='confirm'>";
		//tmpString += "<tr><td>Image</td><td>Name</td><td>Quantity</td><td>Cost</td><td>Add</td><td>Subtract</td><td>Clear</td></tr>";
		tmpString += "<th>Image</th><th>Name</th><th>Quantity</th><th>Cost</th><th>Add</th><th>Subtract</th><th>Clear</th></tr>";

		for(var i=0; i < cartArray.length; i++) {
			var sku = cartArray[i][0]
			var index = cartArray[i][2];
			tmpString += "<tr>";
			tmpString += "<td><img src=\'/~jadrn000/PROJ4_IMAGES/" + sku + ".jpg\'"+
			"'alt=" + cartArray[i][1] + "'\'"+
			" width=\'64\'  /></td>";
			tmpString += "<td>" + proj4_data[index][2] + "</td>";
			tmpString += "<td>" + cartArray[i][1] + "</td>";
			var cost = proj4_data[index][6];
			var subTotal = proj4_data[index][6] * cartArray[i][1];
			tmpString += "<td>" + subTotal.toFixed(2) + "</td>";
			tmpString += "<td><input type='button' value='+' name =" + cartArray[i][0] + " id='add' class='ui-button ui-widget ui-corner-all' /></td>";
			tmpString += "<td><input type='button' value='-' name =" + cartArray[i][0] + " id='sub' class='ui-button ui-widget ui-corner-all'/></td>";
			tmpString += "<td><input type='button' value='Clear' name =" + cartArray[i][0] + "  id='clear' class='ui-button ui-widget ui-corner-all'/></td>";
			tmpString += "</tr>";
			total += subTotal;
			}
				
		tmpString += "<tr class = 'total_display'><td><img src='/~jadrn014/proj4/img/thanks.jpg' width=64 />" +
			"</td><td>Total</td><td>" + cart.size() + "</td><td>Subtotal: " + total.toFixed(2) + 
			"<td><td>Shipping: $" + (cart.size() * 2) + "</td><td>Total Cost: $" + 
			((1.08 * total) + cart.size() *2).toFixed(2) + "</td></tr>";
		tmpString += "</table>";

		tmpString += "<div class='buttons'><input type='button' id='reset_cart' class='ui-button ui-widget ui-corner-all' value='Empty Cart'/><input type='button' value='Order Now' class='ui-button ui-widget ui-corner-all	'id='order_button' /></div>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
		}
	
	$('#content').on('click',$('input[type="button"]'), function(e) {
		if($(e.target).val() != 'Order Now') return;
			if(cart.size() == 0){
				tmpString = "You need items in your cart to complete your order!";
				var handle = document.getElementById('content');
				handle.innerHTML = tmpString;
				return;
			}
			display_order();
		});                 
});    
    
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
    }
    
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
	tempArray=new Array(1);
	var Count=0;
	var tempString=new String(item);

	while (tempString.indexOf(delimiter)>0) {
		tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
		tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
		Count=Count+1
	}
	tempArray[Count]=tempString;
	return tempArray;
}     

function display_order(){
		tmpString = "<div class='light'><form method='post' action='/perl/jadrn014/proj4/confirmation.cgi'>" +
		"<fieldset>"+
		"<legend>Shipping Info</legend>" + 
		"<table>" +
	"	<tr>" +
	"		<td colspan='1'><label for='firstname'> First Name:</label></td>"+
	"		<td colspan='1'><input type='text' name='firstname' id='firstname' size='20' autofocus /></td>"+
	"		<td colspan='1'><label for='lastname'>Last Name:</label></td>"+
	"		<td colspan='1'><input type='text' name='lastname' id='lastname' size='20'  /></td>"+
	"	</tr>"+
	"	<tr>"+
	"		<td colspan='1'><label for='address'>Address:</label></td>"+
	"		<td colspan='5'><input type='text' name='address' id='address' size='50'  /></td>"+
	"	</tr>"+
	"	<tr>"+
	"		<td colspan='1'><label for='address2'>Address:</label></td>"+
	"		<td colspan='5'><input type='text' name='address2' id='address2' size='50'  /></td>"+
	"	</tr>"+
	"	<tr>"+
	"		<td colspan='1'><label for='city'>City:</label></td>"+
	"		<td colspan='1'><input type='text' name='city' id='city' size='20'  /></td>"+
	"		<td colspan='1'><label for='state'>State:</label></td>"+
	"		<td colspan='1'><select id ='state' name='state'><option value='invalid'>Select a State</option>"+
	"			<option value='AL'>Alabama</option>"+
	"			<option value='AK'>Alaska</option>"+
	"			<option value='AZ'>Arizona</option>"+
	"			<option value='AR'>Arkansas</option>"+
	"			<option value='CA'>California</option>"+
	"			<option value='CO'>Colorado</option>"+
	"			<option value='CT'>Connecticut</option>"+
	"			<option value='DE'>Delaware</option>"+
	"			<option value='DC'>District Of Columbia</option>"+
	"			<option value='FL'>Florida</option>"+
	"			<option value='GA'>Georgia</option>"+
	"			<option value='HI'>Hawaii</option>"+
	"			<option value='ID'>Idaho</option>"+
	"			<option value='IL'>Illinois</option>"+
	"			<option value='IN'>Indiana</option>"+
	"			<option value='IA'>Iowa</option>"+
	"			<option value='KS'>Kansas</option>"+
	"			<option value='KY'>Kentucky</option>"+
	"			<option value='LA'>Louisiana</option>"+
	"			<option value='ME'>Maine</option>"+
	"			<option value='MD'>Maryland</option>"+
	"			<option value='MA'>Massachusetts</option>"+
	"			<option value='MI'>Michigan</option>"+
	"			<option value='MN'>Minnesota</option>"+
	"			<option value='MS'>Mississippi</option>"+
	"			<option value='MO'>Missouri</option>"+
	"			<option value='MT'>Montana</option>"+
	"			<option value='NE'>Nebraska</option>"+
	"			<option value='NV'>Nevada</option>"+
	"			<option value='NH'>New Hampshire</option>"+
	"			<option value='NJ'>New Jersey</option>"+
	"			<option value='NM'>New Mexico</option>"+
	"			<option value='NY'>New York</option>"+
	"			<option value='NC'>North Carolina</option>"+
	"			<option value='ND'>North Dakota</option>"+
	"			<option value='OH'>Ohio</option>"+
	"			<option value='OK'>Oklahoma</option>"+
	"			<option value='OR'>Oregon</option>"+
	"			<option value='PA'>Pennsylvania</option>"+
	"			<option value='RI'>Rhode Island</option>"+
	"			<option value='SC'>South Carolina</option>"+
	"			<option value='SD'>South Dakota</option>"+
	"			<option value='TN'>Tennessee</option>"+
	"			<option value='TX'>Texas</option>"+
	"			<option value='UT'>Utah</option>"+
	"			<option value='VT'>Vermont</option>"+
	"			<option value='VA'>Virginia</option>"+
	"			<option value='WA'>Washington</option>"+
	"			<option value='WV'>West Virginia</option>"+
	"			<option value='WI'>Wisconsin</option>"+
	"			<option value='WY'>Wyoming</option>"+		
	"		</select></td>"+
	"	</tr>"+
	"	<tr>"+
	"		<td colspan='1'><label for='zip'>Zip:</label></td>"+
	"		<td colspan='1'><input type='text' name='zip' id='zip' size='5' pattern='[0-9]{5}' /></td>"+
	"		<td colspan='1'><label for='phone'>Phone#:</label></td>"+
	"		<td colspan='1'><input type='text' name='phone' id='phone' size='20' placeholder='###-###-####' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'/></td>				"+
	"	</tr>"+
	"	</table>"+
	"	</fieldset><br/>"	+
	"	<fieldset>"+
	"	<legend>Billing Info</legend>" + 
	"	<input type='checkbox' id='checkbox' name='sameInfo' />Check if Billing address is different"+	
	"	<table>"+
	"		<tr>"+
	"			<td colspan='1'><label for='firstnameBill'> First Name:</label></td>"+
	"			<td colspan='1'><input type='text' name='firstnameBill' id='firstnameBill' size='20' /></td>"+
	"			<td colspan='1'><label for='lastnameBill'>Last Name:</label></td>"+
	"			<td colspan='1'><input type='text' name='lastnameBill' id='lastnameBill' size='20'  /></td>"+
	"		</tr>"+
	"		<tr>"+
	"			<td colspan='1'><label for='addressBill'>Address:</label></td>"+
	"			<td colspan='5'><input type='text' name='addressBill' id='addressBill' size='50'  /></td>"+
	"		</tr>"+
	"		<tr>"+
	"			<td colspan='1'><label for='address2Bill'>Address:</label></td>"+
	"			<td colspan='5'><input type='text' name='address2Bill' id='address2Bill' size='50'  /></td>"+
	"		</tr>"+
	"		<tr>"+
	"			<td colspan='1'><label for='cityBill'>City:</label></td>"+
	"			<td colspan='1'><input type='text' name='cityBill' id='cityBill' size='20'  /></td>"+
	"			<td colspan='1'><label for='stateBill'>State:</label></td>"+
	"			<td colspan='1'><select id ='stateBill' name='stateBill'><option value='invalid'>Select a State</option>"+
	"				<option value='AL'>Alabama</option>"+
	"				<option value='AK'>Alaska</option>"+
	"				<option value='AZ'>Arizona</option>"+
	"				<option value='AR'>Arkansas</option>"+
	"				<option value='CA'>California</option>"+
	"				<option value='CO'>Colorado</option>"+
	"				<option value='CT'>Connecticut</option>"+
	"				<option value='DE'>Delaware</option>"+
	"				<option value='DC'>District Of Columbia</option>"+
	"				<option value='FL'>Florida</option>"+
	"				<option value='GA'>Georgia</option>"+
	"				<option value='HI'>Hawaii</option>"+
	"				<option value='ID'>Idaho</option>"+
	"				<option value='IL'>Illinois</option>"+
	"				<option value='IN'>Indiana</option>"+
	"				<option value='IA'>Iowa</option>"+
	"				<option value='KS'>Kansas</option>"+
	"				<option value='KY'>Kentucky</option>"+
	"				<option value='LA'>Louisiana</option>"+
	"				<option value='ME'>Maine</option>"+
	"				<option value='MD'>Maryland</option>"+
	"				<option value='MA'>Massachusetts</option>"+
	"				<option value='MI'>Michigan</option>"+
	"				<option value='MN'>Minnesota</option>"+
	"				<option value='MS'>Mississippi</option>"+
	"				<option value='MO'>Missouri</option>"+
	"				<option value='MT'>Montana</option>"+
	"				<option value='NE'>Nebraska</option>"+
	"				<option value='NV'>Nevada</option>"+
	"				<option value='NH'>New Hampshire</option>"+
	"				<option value='NJ'>New Jersey</option>"+
	"				<option value='NM'>New Mexico</option>"+
	"				<option value='NY'>New York</option>"+
	"				<option value='NC'>North Carolina</option>"+
	"				<option value='ND'>North Dakota</option>"+
	"				<option value='OH'>Ohio</option>"+
	"				<option value='OK'>Oklahoma</option>"+
	"				<option value='OR'>Oregon</option>"+
	"				<option value='PA'>Pennsylvania</option>"+
	"				<option value='RI'>Rhode Island</option>"+
	"				<option value='SC'>South Carolina</option>"+
	"				<option value='SD'>South Dakota</option>"+
	"				<option value='TN'>Tennessee</option>"+
	"				<option value='TX'>Texas</option>"+
	"				<option value='UT'>Utah</option>"+
	"				<option value='VT'>Vermont</option>"+
	"				<option value='VA'>Virginia</option>"+
	"				<option value='WA'>Washington</option>"+
	"				<option value='WV'>West Virginia</option>"+
	"				<option value='WI'>Wisconsin</option>"+
	"				<option value='WY'>Wyoming</option>"+
	"			</select></td>"+
	"		</tr>"+
	"		<tr>"+
	"			<td colspan='1'><label for='zipBill'>Zip:</label></td>"+
	"			<td colspan='1'><input type='text' name='zipBill' id='zipBill' size='5' pattern='[0-9]{5}' /></td>"+
	"			<td colspan='1'><label for='phoneBill'>Phone#:</label></td>"+
	"			<td colspan='1'><input type='text' name='phoneBill' id='phoneBill' size='20' placeholder='###-###-####' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'/></td>				"+
	"		</tr>"+
	"		</table>"+		
		"</fieldset><br/>" + 
		"<fieldset>"+
		"<legend>Card Info</legend>" + 	
	"		<table>"+
	"		<tr>"+
	"			<td colspan='1'><select id ='cardType' name='cardType'><option value='invalid'>Select a Card</option>"+
	"				<option value='MasterCard'>MasterCard</option>"+
	"				<option value='Amex'>American Express</option>"+
	"				<option value='Visa'>Visa</option>"+
	"				<option value='Discover'>Discover</option>"+
	"			</td>"+
	"		<tr>"+
	"			<td colspan='1'><label for='cardNum'>Card Number:</label></td>"+
	"			<td colspan='2'><input type='text' name='cardNum' id='cardNum' size='30' placeholder='####-####-####-####' pattern='[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}' /></td>"+
	"			<td colspan='1'><label for='expiration'>Expiration:</label></td>"+
	"			<td colspan='1'><input type='text' name='expiration' id='expiration' size='8' placeholder='##/####' pattern='[0-9]{2}/[0-9]{4}'/></td>				"+
	"		</tr>"+
	"		</table>"+
	"    <input type='reset' class='ui-button ui-widget ui-corner-all' />"+
    "    <input type='submit' class='ui-button ui-widget ui-corner-all' value='Submit Order'/>"+
	"</form>"+
	"<div id='status'>"+
	"	<!-- error message will be added here-->"+
	"	<h3 id='answer'>&nbsp </h3>"+
	"</div>" +
	"</div>";
	var handle = document.getElementById('content');
	handle.innerHTML = tmpString;
}