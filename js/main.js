function preload() {
	$(window).load(function() {
		$("body").removeClass("preload");
	  });
}
// username==password
function change() {
	var src= document.getElementById('userlogin');
	var dest=document.getElementById('passwordlogin');
	dest.value=src.value;
}
let ishow = true;
function memberlogin() {
	if(ishow) {
        var input = document.getElementById ("userlogin");
		input.placeholder = "Username";
		document.getElementById('userlogin').value = "";
		document.getElementById('passwordlogin').value = "";
		document.getElementById('userlogin').setAttribute("onKeyup", "");
        document.getElementById('passwordlogin').style.display="inline-block";
		const inputcl = document.getElementsByClassName("user-input");
		inputcl[0].style.backgroundImage = "url('img/user.svg')";
		inputcl[0].style.paddingLeft = "30px";
		inputcl[0].style.textAlign = "left";
		inputcl[1].style.backgroundImage = "url('img/password.svg')";
		inputcl[1].style.paddingLeft = "30px";
		inputcl[1].style.textAlign = "left";
        document.getElementById('switcher').innerHTML="Voucher Login";
		ishow = false;
    }
    else {
		var input = document.getElementById ("userlogin");
		input.placeholder = "Enter Voucher Code";
		document.getElementById('userlogin').setAttribute("onKeyup", "change()");
		document.getElementById('passwordlogin').value = "";
		document.getElementById('userlogin').value = "";
        document.getElementById('passwordlogin').style.display="none";
        const inputcl = document.getElementsByClassName("user-input");
		inputcl[0].style.backgroundImage = "";
		inputcl[0].style.paddingLeft = "0";
		inputcl[0].style.textAlign = "center";
        document.getElementById('switcher').innerHTML=" Member Login";

	ishow= true;	
}
}
function wifirates() {
    document.getElementById('box').style.display="none";
	document.getElementById('wifi-rate').style.display="block";
	document.getElementById('reminder-container').style.display="none";
}
function faqs() {
	document.getElementById('box').style.display="none";
	document.getElementById('reminder-container').style.display="block";
	document.getElementById('wifi-rate').style.display="none";
}
function signbck() {
	document.getElementById('box').style.display="block";
	document.getElementById('wifi-rate').style.display="none";
	document.getElementById('reminder-container').style.display="none";
}