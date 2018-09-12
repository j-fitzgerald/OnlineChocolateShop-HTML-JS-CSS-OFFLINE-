/*  A shopping cart in javascript that uses cookies
    Alan Riggins
    CS545 Fall 2015
    There is no error checking

    Method Prototypes:
    // creates a new shopping cart using cookies.
    // The parameter is your jadran account number.
    var cart = new shopping_cart("jadrnxxx");
    
    // Adds a new entry or increments the quantity if the entry exists.
    cart.add(sku, quantity);
    
    // changes the quantity associated with the sku to the new value
    // parameter provided
    cart.setQuantity(sku, quantity);
    
    // deletes the sku from the cart (cookie).
    cart.delete(sku);
    
    // returns the total number of elements in the cart.
    cart.size();
    
    // returns a two-dimensional array of the sku=quantity pairs
    // [0] is the sku, [1] is the quantity. array[sku][quantity]
    cart.getCartArray();
*/
    
    
function shopping_cart(owner) {
    this.owner = $.trim(owner);
    this.skuArray = new Array();
    this.qtyArray = new Array();
	this.indexArray = new Array();

//////////////////////////////////////////////////////////////////////////
// Do not use the following two methods;  they are private to this class
    this.getCookieValues = function() {  // PRIVATE METHOD
        var raw_string = document.cookie;        
        var arr = new Array();
        if(raw_string == undefined)
            return;
        var tmp = raw_string.split(";");
        var myValue = null;        
        for(i=0; i < tmp.length; i++)
            if(tmp[i].indexOf(owner) != -1)
                myValue = tmp[i].split("=");
        if(!myValue)
            return;
        arr = myValue[1].split("||");
        for(i=0; i < arr.length; i++) {
            var pair = arr[i].split("|"); 
            if(pair[0] == undefined || pair[1] == undefined) continue;
            this.skuArray[i] = pair[0];
            this.qtyArray[i] = pair[1];
			this.indexArray[i] = pair[2];
            }         
        }
        
    this.writeCookie = function() {  // PRIVATE METHOD
        var toWrite = this.owner+"=";
        for(i=0; i < this.skuArray.length; i++) 
            toWrite += this.skuArray[i] + "|" + this.qtyArray[i] + "|" + this.indexArray[i] + "||";
        toWrite = toWrite.substring(0,toWrite.length - 2);
        toWrite += "; path=/";
        document.cookie = toWrite;
        }
//////////////////////////////////////////////////////////////////////////            
        
    this.add = function(sku, quantity, index) {
        sku = $.trim(sku);
        quantity = $.trim(quantity);
        this.getCookieValues(); 
        var found = false;
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku) {        
            this.qtyArray[i] = parseInt(quantity,10) + parseInt(this.qtyArray[i],10);
            found = true;            
            }
        if(!found) {       
            this.skuArray.push(sku);
            this.qtyArray.push(quantity);
			this.indexArray.push(index);
            }
        this.writeCookie();         
    }
	
	this.retQty = function(sku){
		for(i=0; i < this.skuArray.length; i++)
			if(this.skuArray[i] == sku) {        
				return this.qtyArray[i];
			}
		return 0;
	}
    
    this.setQuantity = function(sku, quantity) {  
        sku = $.trim(sku);
        var found = false;
        if(sku == "") return;        
        quantity = $.trim(quantity);            
        this.getCookieValues();
        
        for(i=0; i < this.skuArray.length; i++)
            if(this.skuArray[i] == sku) {        
                this.qtyArray[i] = parseInt(quantity,10);            
                found = true;
                }
        if(found)
            this.writeCookie();
        }    
    
    this.delete = function(sku) {
		console.log('delete called');
        sku = $.trim(sku);
        var index = -1;
        this.getCookieValues();       
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku)  
            index = i;               
        if(index != -1) {      
            this.skuArray.splice(index,1);
            this.qtyArray.splice(index,1);
            }         
        if(this.skuArray.length == 0) {
            document.cookie = this.owner + "= ;expires=-1;path=/";
            }
        else
            this.writeCookie();
        }
        
    this.size = function() {
        this.getCookieValues();
        var count = 0;
        for(i=0; i < this.qtyArray.length; i++)
            count += parseInt(this.qtyArray[i],10);
        return count;
        }        
        
    this.getCartArray = function() {
        this.getCookieValues();
        var returnArray = new Array();
        for(i=0; i < this.skuArray.length; i++) {
            returnArray[i] = new Array();
            returnArray[i].push(this.skuArray[i]);
            returnArray[i].push(this.qtyArray[i]);
			returnArray[i].push(this.indexArray[i]);
            }
        return returnArray;
        }      

    this.clearCookie = function() {
		for (var i = this.skuArray.length; i >=0; i--){
			this.delete(this.skuArray[i]);
		}
        var toWrite = this.owner+"=";
        toWrite = "-";
        document.cookie = toWrite;
		this.writeCookie();
        }		
}    
        
