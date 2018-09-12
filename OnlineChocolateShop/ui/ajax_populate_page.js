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
	
    $.get('/perl/jadrn014/proj4/get_products.cgi', storeData);

    var cart = new shopping_cart("jadrn014");
	update_cart();
	
	
	$('#milk').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=1; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /><br /><hr />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

	$('#dark').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=1; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /><br /><hr />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
        
    $('#nuts').on('click', function() {   
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";                     
                for(var j=1; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /><br /><hr />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
    $('#brittle').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=1; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /><br /><hr />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
		
	$('#truffles').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=1; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /><br /><hr />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
		
	$('#gifts').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=1; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' /><br /><hr />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
		
	$('#holiday').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=1; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
            tmpString += "<input type='button' name="+proj4_data[i][0]+
            " value='Add to Cart' />";
			tmpString += "<span>Added to Cart</span><br /><hr />";                
			
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
        
$('#content').on('click',$('input[type="button"]'), function(e) {
    if($(e.target).val() != 'Add to Cart') return;
	var sku = $(e.target).attr("name");
	cart.add(sku, 1);
	//$(this).next().fadeIn(50).fadeOut(2000);
	    $(this).find("span").animate({opacity:1},function(){
        $(this).text("Added to Cart")
            .animate({opacity:0});  
    })
	update_cart();
    });
        
		
    $(document).on('click', ".buy", function() {  
        var sku = this.id;
        cart.add(sku,1);
        $(this).next().fadeIn(50).fadeOut(2000);
        });

	function update_cart(){
			tmpString = cart.size();
		count.innerHTML = tmpString;
		}		
		
	$('#cart').on('click', function() {
		display_cart();

        });
		
	$('#clear_cart').on('click', function() {
        cart.clearCookie();
		tmpString = "Cart cleared!";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
		update_cart();
        });
		
	$('#content').on('click',$('input[type="button"]'), function(e) {
		if($(e.target).val() != 'Add More') return;
		var sku = $(e.target).attr("name");
		cart.add(sku, 1);
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
        tmpString = "<table id='confirm'>";
		cartArray = cart.getCartArray()
		for(var i=0; i < cartArray.length; i++) {
				tmpString += "<tr>";
				tmpString += "<td>Insert picture here</td>";
				tmpString += "<td>" + cartArray[i][0] + "</td>";
				tmpString += "<td>" + cartArray[i][1] + "</td>";
				tmpString += "<td><input type='button' value='Add More' name =" + cartArray[i][0] + " id='add'/></td";
				tmpString += "<td><input type='button' value='Clear' name =" + cartArray[i][0] + "  id='clear'/></td>";
				tmpString += "</tr>";
                }
		tmpString += "</table>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
		}
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