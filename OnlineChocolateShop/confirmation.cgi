#!/usr/bin/perl 

use DBI;
use DBD::mysql;
use CGI;
use CGI::Cookie;

#POSIX for date
use POSIX qw(strftime);

my $q = new CGI;

my $id = "0";
my $date = strftime "%m/%d/%Y", localtime;
my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn014";
my $username = "jadrn014";
my $password = "wallpaper";
my $database_source = "dbi:mysql:$database:$host:$port";

my $str = "Nothing happened";
	
my $dbh = DBI->connect($database_source, $username, $password)
or die 'Cannot connect to orders db';


my $hostProducts = "opatija.sdsu.edu";
my $portProducts = "3306";
my $databaseProducts = "proj4";
my $usernameProducts = "jadrn014";
my $passwordProducts = "wallpaper";
my $database_sourceProducts = "dbi:mysql:$databaseProducts:$hostProducts:$portProducts";

	
my $dbhProducts = DBI->connect($database_sourceProducts, $usernameProducts, $passwordProducts) 
or die 'Cannot connect to products db';



#print "Content-type:  text/html\n\n";


	print <<END_CONTENT;
	<?xml version="1.0" encoding="utf-8"?>
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
			"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
			<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

	<head>
		<title>Confirmation Page</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="http://jadran.sdsu.edu/~jadrn014/proj4/proj4.css" />   
    <link rel="stylesheet" href="http://jadran.sdsu.edu/~jadrn014/proj4/ui/jquery-ui.min.css">      

	<script type="text/javascript" src="http://jadran.sdsu.edu/~jadrn014/proj4/p2.js"></script>
    <script type="text/javascript" src="http://jadran.sdsu.edu/jquery/jquery.js"></script>
	<script src="http://jadran.sdsu.edu/~jadrn014/proj4/ui/jquery-ui.min.js"></script>
    <script type="text/javascript" src="http://jadran.sdsu.edu/~jadrn014/proj4/ajax_get_lib.js"></script>
	
    <script type="text/javascript" src="http://jadran.sdsu.edu/~jadrn014/proj4/ajax_populate_page.js"></script>
    <script type="text/javascript" src="http://jadran.sdsu.edu/~jadrn014/proj4/shopping_cart.js"></script>  
	</head>

	<body>
	<div class='center'>
    <div class="ui-widget">
		<div class="ui-widget-header">
		<input type="button" id="home" value="Home" class="ui-button ui-widget ui-corner-all"/>
		<input type="button" id="about" value="About Us" class="ui-button ui-widget ui-corner-all"/>
		<input type="button" id='contact' value="Contact" class="ui-button ui-widget ui-corner-all"/>

		<input type="button" value="Empty Cart" class="clear_cart ui-button ui-widget ui-corner-all"/>
		<input type="button" id="cart" class="ui-button ui-widget ui-corner-all" value="Your cart:" /><span class="ui-icon ui-icon-cart"></span><span id="count">0</span>
				<h1>Welcome to Bertha's Chocolaterium</h1>
		<hr/>
		</div>
		<div id='flavors'>
		
			<input type="button" value="Milk Chocolate" id="milk" class="ui-button ui-widget ui-corner-all" />
			<input type="button" value="Dark Chocolate" id="dark" class="ui-button ui-widget ui-corner-all" /> 
			<input type="button" value="Nuts and Chews" id="nuts" class="ui-button ui-widget ui-corner-all" />
			<input type="button" value="Brittles and Toffies" id="brittle" class="ui-button ui-widget ui-corner-all" />
			<input type="button" value="Truffles" id="truffles" class="ui-button ui-widget ui-corner-all" />
			<input type="button" value="Gifts" id="gifts" class="ui-button ui-widget ui-corner-all" />
			<input type="button" value="Holiday Assortments" id="holiday" class="ui-button ui-widget ui-corner-all" />
			<hr />
		</div>
		</div>
		</div>
		<div id="content">
				<h1>Thank you for your order</h1>
				
END_CONTENT
	my %cookies = $ENV{COOKIE};
	print "<table class='confirm'>\n";
	print "<th>Please print a copy of your receipt for your records</th>";
	my ($key, $value);

	%cookies = CGI::Cookie->fetch;
	my $subtotal = 0;
    my $qtyTotal = 0;
	
	my $v = $q->cookie('jadrn014');
	@rows = split('\|\|',$v);
	foreach $row (@rows) {
		($sku, $qty) = split('\|',$row);
		#print "in foreach $sku = $qty<br />";
		$str = "";

		my $insert_statement = "INSERT INTO orders (sku, date, quantity) VALUES ('$sku', '$date', '$qty')";
		if ($dbh->do($insert_statement)){
			#print "in insertion";
			my $cookie = $q->cookie(-name=>'jadrn014',-value=>'',-path=>'/');
			print $q->header(-cookie=>$cookie);		
	
			my $sth = $dbhProducts->prepare("SELECT title, retail FROM products WHERE sku = '$sku'");
			if ($sth->execute()){
				while(my @row=$sth->fetchrow_array()) {
					print "<tr>";
						print "<td>@row[0]</td>";
						my $cost = (@row[1] * $qty);
						$subtotal += $cost;
						$qtyTotal += $qty;
						print "<td>" . $qty . "</td>";
						my $printcost = sprintf("%.2f", $cost);
						print "<td>\$" . $printcost . "</td>";
						print "</tr>";
#				$str .= ";";    
				}
			}
			else{
				print "sql insert failed";
			}
		}
		else{
			$str = "sql search failed!";
		}
	}
	$subtotal = ($subtotal * 1.08) + ($qtyTotal * 2);
	my $total = sprintf("%.2f", $subtotal);
	print "<tr><th>Total</th><th></th><th>\$$total</th>";

	print "</table><br /><hr />";
	print "<h2>The items will be shipped to:</h2>";
	print "<table class='confirm'>";
		my $fname = $q->param('firstname');
		my $lname = $q->param('lastname');
		my $add1 = $q->param('address');
		my $add2 = $q->param('address2');
		my $city = $q->param('city');
		my $state = $q->param('state');
		my $zip = $q->param('zip');
		my $phone = $q->param('phone');
		print "<tr><td>Name:</td><td>$fname $lname</td></tr>";
		print "<tr><td>Address</td><td>$add1</td></tr>";
		print "<tr><td>Address:</td><td>$add2</td></tr>";
		print "<tr><td>City:</td><td>$city</td></tr>";
		print "<tr><td>State:</td><td>$state</td></tr>";
		print "<tr><td>Zip:</td><td>$zip</td><tr>";
		print "<tr><td>Phone:</td><td>$phone</td></tr>";

		print "</tr></table>";


	
	print "</div>\n";
	print "</body>\n";
	print "</html>\n";

$dbh->disconnect();
$dbhProducts->disconnect();