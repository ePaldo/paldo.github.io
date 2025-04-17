
window.addEventListener("load", titlehtml);
function titlehtml() {
  document.getElementById('title').innerHTML = window.location.hostname;	
  document.getElementById('dname').innerHTML = window.location.hostname;	
}
// username==password
function change() {
	var src= document.getElementById('userlogin');
	var dest=document.getElementById('passwordlogin');
	dest.value=src.value;
}
function shows() {
	var input = document.getElementById ("userlogin");
	input.placeholder = "Enter Username";
	document.getElementById('userlogin').value = "";
	document.getElementById('passwordlogin').value = "";
	document.getElementById('userlogin').setAttribute("onKeyup", "");
	document.getElementById('passwordlogin').style.display="inline-block";
	document.getElementById('switcher').value="Login As Voucher";
	ishow = false;
}

function hides() {
	var input = document.getElementById ("userlogin");
	input.placeholder = "Enter Voucher Code";
	document.getElementById('userlogin').setAttribute("onKeyup", "change()");
	document.getElementById('passwordlogin').value = "";
	document.getElementById('userlogin').value = "";
	document.getElementById('passwordlogin').style.display="none";
	document.getElementById('switcher').value="Login As Member";
	ishow= true;	
}
let ishow = true;
function memberlogin() {
	if(ishow) {
		shows();
    }
    else {
		hides();
}
}
function wifirates() {
	document.getElementById('wifirates').style.display="grid"
	document.getElementById('wifirates').style.pointerEvents="auto"
	document.body.style.overflow = "hidden"
	document.body.style.userSelect = "none"
	
}
function modalclose() {
	document.getElementById('wifirates').style.display="none"
	document.getElementById('wifirates').style.pointerEvents="none"
	document.body.style.overflow = "auto"
	document.body.style.userSelect = "auto"
}
function howtoconnect() {
	document.getElementById('reminders').style.display="grid"
	document.getElementById('reminders').style.pointerEvents="auto"
	document.body.style.overflow = "hidden"
	document.body.style.userSelect = "none"
}
function modalclose2() {
	document.getElementById('reminders').style.display="none"
	document.getElementById('reminders').style.pointerEvents="none"
	document.body.style.overflow = "auto"
	document.body.style.userSelect = "auto"
}

var seconds = 9999;
var rtime = document.getElementById("get-time").value;
var seconds = rtime;
var countDownDate = new Date(Date.now()+ seconds*1000).getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	var time_string = days ? days + "d ": "";
	time_string += hours ?  hours + "h ": "";
	time_string += minutes ?  minutes + "m ": "";
	time_string += seconds ?  seconds + "s ": "";
	const rtime = document.getElementsByClassName("remain-time");
	document.getElementsByClassName("remain-time")[0].innerHTML = time_string;
	document.getElementsByClassName("remain-time")[2].innerHTML = time_string;
	if (distance < 0) {
	clearInterval(x);
	document.getElementsByClassName("remain-time")[0].innerHTML = "Trial Expired";
	document.getElementsByClassName("remain-time")[2].innerHTML = "Voucher Expired ";
	}
}, 1000); 
function convertSecondsToDHMS(seconds2) {
	let days = Math.floor(seconds2 / (3600*24));
	let hours = Math.floor(seconds2 % (3600*24) / 3600);
	let minutes = Math.floor(seconds2 % 3600 / 60);
	let remainingSeconds = Math.floor(seconds2 % 60);
	let result = '';
	if (days > 0) {
	  result += days + 'd ';
	}
	if (hours > 0) {
	  result += hours + 'h ';
	}
	if (minutes > 0) {
	  result += minutes + 'm ';
	}
	if (remainingSeconds > 0) {
	  result += remainingSeconds + 's';
	}    
	return result;
  }
  const seconds2 = document.getElementById("get-time").value;
  const dhms = convertSecondsToDHMS(seconds2);
  document.getElementById('time-left').innerHTML = dhms;


  function titlehtml() {
	document.getElementById('title').innerHTML = window.location.hostname;	
	document.getElementById('dname').innerHTML = window.location.hostname;	
  }
  document.getElementById('title').innerHTML = window.location.hostname;	
  document.getElementById('dname').innerHTML = window.location.hostname;	