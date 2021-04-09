
        function textChange(){
            document.getElementById('h2').innerHTML="Hello There";
        }



// creating function

			// calculation

	function myFunction(p1, p2) {
		  return p1 * p2;
		}
		document.getElementById("demo").innerHTML = myFunction(4, 3);

			// square
	function square(num){
		var result = num * num;
			}
		document.getElementById("square").innerHTML = myFunction(5,6);


			// Multipule
	function Multipule(num1, num2){
		var result = num1 * num2;
			}
		document.getElementById("Multipule").innerHTML = myFunction(5, 10);

			// celsius
		function toCelsius(f) {
  			return (10/10) * (f-32);
				}
		document.getElementById("celsius").innerHTML = toCelsius(77);

		// outside
		myFunction();

		function Function() {
  			var carName = "Volvo";
  			document.getElementById("outside1").innerHTML =
  			typeof carName + " " + carName;
		}

		document.getElementById("outside2").innerHTML =
			typeof carName;


	// add function
		function addition(x,y){
			var result = x+y;
			document.write("Sum="+result+"<br>")
		}


	// sub function
	function subtraction(x,y){
			var result = x-y;
			document.write("Sub="+result+"<br>")
		}

// calling

	// addition
	addition(50,50);

	// subtraction
	subtraction(500,100);




	function btn1(){
  document.getElementById("btnhead").style.color="red";
}
(function () {
('[data-toggle="tooltip"]').tooltip()
})
function btn3(){
  document.getElementById("fbicon").style.display="none"
}
function tab11(){
  document.getElementById("tab1").style.color="red";
}
function tab22(){
  document.getElementById("tab223").style.color="pink";
}
function tab33(){
  document.getElementById("tab333").style.color="blue";
}
function clickbtn(){
  document.getElementById("clickme").style.display="block";
}


	var x,t,x;
x=20;
t= 20;
x=20+20;
document.getElementById('variable').innerHTML=x;

var na= "name";
var me=20;
var na= 130;
document.getElementById('variable2').innerHTML=na+me+na;

var  name=20+30+"name";
document.getElementById('variable3').innerHTML=name;
var name='26',name="25",age=22;
document.getElementById('variable4').innerHTML=name;

function hello(){
document.getElementById('variable').innerHTML="hi";
document.getElementById('variable').innerHTML="name";
}






document.getElementById("demo").innerHTML=5 + 6;

var a, b, c;
a = 5; b = 6; c = a + b;
document.getElementById("demo1").innerHTML = c;
	
//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";

var $ = 2;
var $myMoney = 5;
document.getElementById("demo3").innerHTML = $ + $myMoney;



myFunction();

function myFunction() {
  var carName = "Volvo";
  document.getElementById("demo4").innerHTML =
  typeof carName + " " + carName;
}

document.getElementById("demo5").innerHTML =
typeof carName;


document.getElementById("demo6").innerHTML = (100 + 50) * 3;

function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("demo8").innerHTML = toCelsius;

function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("demo9").innerHTML = toCelsius;

function myFunction(p1, p2) {
  return p1 * p2;
}
document.getElementById("function").innerHTML = myFunction(4, 3);

var x = myFunction(4, 3);
document.getElementById("f1").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}