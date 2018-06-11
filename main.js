// JavaScript Document



// copyright 1999 Idocs, Inc. http://www.idocs.com
// Distribute this script freely but keep this notice in place
function numbersonly(myfield, e, dec)
{
var key;
var keychar;

if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);

// control keys
if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) )
   return true;

// numbers
else if ((("0123456789").indexOf(keychar) > -1))
   return true;

// decimal point jump
else if (dec && (keychar == "."))
   {
   myfield.form.elements[dec].focus();
   return false;
   }
else
   return false;
}

function CheckAccept(){
	var acc = Number(document.ContactForm.acceptT.value);
	if(acc == 0){
		document.ContactForm.accept.value = "true";
		document.ContactForm.acceptT.value = 1;
		document.getElementById("chb").setAttribute('src', "images/check_on.png");
	}else{
		document.ContactForm.accept.value = "false";
		document.ContactForm.acceptT.value = 0;
		document.getElementById("chb").setAttribute('src', "images/check_off.png");
	}
}



function showAlert()
{
	var erMess = document.getElementById("ErrorDiv");
	erMess.innerHTML = " ";

}

function validEmail(emailVar) {
	email = emailVar.toLowerCase();
	invalidChars = " /:,;";
	if (email == "") {
		return false;
	}
	for (i=0; i<invalidChars.length; i++) {
		badChar = invalidChars.charAt(i);
		if (email.indexOf(badChar, 0)>-1) {
			return false;
		}
	}
	atPos = email.indexOf("@", 1);
	if (atPos == -1) {
		return false;
	}
	if (email.indexOf("@", atPos+1) != -1) {
		return false;
	}
	periodPos = email.indexOf(".", atPos);
	if (periodPos == -1) {
		return false;
	}
	if (periodPos+3>email.length) {
		return false;
	}
	emailEnd_arr = [".nu",".com",".net",".org",".info",".biz",".name",".mobi",".cc",".ws",".co.il",".org.il",".muni.il",".net.il",".to",".eu",".at",".ac",".fm",".ro",".tc",".vg",".ms",".gs",".tv",".li",".io",".it",".jp",".nl",".ru",".co.uk",".com.mx",".co.nz",".net.nz",".org.nz",".sh",".tm",".gov.il"];
	for (i=0; i<=emailEnd_arr.length-1; i++)
	{
		index2 = email.indexOf(emailEnd_arr[i],atPos+2);
		if (Number(index2) != -1)
		{
			break;
		}
	}
	if (Number(index2) != -1)
	{
		return true;
	}
	else
	{
		return false;
	}
}


function SubmitData(){
	$("#errors").html('');
	var fname = $("#fname").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	
	$("#fname").css('background-color', 'transparent');
	$("#phone").css('background-color', 'transparent');
	$("#email").css('background-color', 'transparent');

	
	if(fname.length < 2 || fname == "*שם מלא"){
		$("#fname").focus();
		$('#errors').append('אנא הקלד שם מלא');
		$("#fname").css('background-color', '#cc0000');
		//document.ContactForm.fname.focus();
	}
	else if(phone.length < 9 || isNaN(phone) || phone.toString().substring(0,1) != "0" || phone.toString().substring(0,1) == "1" || (phone.toString().substring(0,2) != "02" && phone.toString().substring(0,2) != "03" && phone.toString().substring(0,2) != "04" && phone.toString().substring(0,2) != "08" && phone.toString().substring(0,2) != "09" && phone.toString().substring(0,3) != "050" && phone.toString().substring(0,3) != "052" && phone.toString().substring(0,3) != "053" && phone.toString().substring(0,3) != "054" && phone.toString().substring(0,3) != "055" && phone.toString().substring(0,3) != "056" && phone.toString().substring(0,3) != "057" && phone.toString().substring(0,3) != "058" && phone.toString().substring(0,3) != "072" && phone.toString().substring(0,3) != "073" && phone.toString().substring(0,3) != "074" && phone.toString().substring(0,3) != "077" && phone.toString().substring(0,3) != "078")){
//	else if(phone.length < 10 || isNaN(phone) || phone.toString().substring(0,1) != "0" || phone.toString().substring(0,1) == "1" || (phone.toString().substring(0,3) != "050" && phone.toString().substring(0,3) != "052" && phone.toString().substring(0,3) != "053" && phone.toString().substring(0,3) != "054" && phone.toString().substring(0,3) != "055" && phone.toString().substring(0,3) != "056" && phone.toString().substring(0,3) != "057" && phone.toString().substring(0,3) != "058" && phone.toString().substring(0,3) != "072" && phone.toString().substring(0,3) != "073" && phone.toString().substring(0,3) != "074" && phone.toString().substring(0,3) != "077" && phone.toString().substring(0,3) != "078")){
//	else if(phone.length < 9 ){
		//window.setTimeout('showAlert()',3000);
		$("#phone").focus();
		$('#errors').append('מספר הטלפון שגוי');
		$("#phone").css('background-color', '#cc0000');
		//document.ContactForm.phone.focus();
	}
	else if (!validEmail(email)){
		$("#email").focus();
		$('#errors').append('כתובת דוא"ל שגויה');
		//erMess.innerHTML = "כתובת דוא''ל שגויה";
		//window.setTimeout('showAlert()',3000);
		$("#email").css('background-color', '#cc0000');
		//document.ContactForm.email.focus();
	}
	else{
		document.ContactForm.submit();
		document.ContactForm.reset();
		$('#errors').append('תודה, פרטיך התקבלו בהצלחה');
		$("#FormDiv").fadeOut(500);
		$("#ThankYou").fadeIn(500);
		//dataLayer.push({'event':'send-form'});
		//fbq('track', 'Lead');
		SendEvent('Lead', 'old_money', "'"+$("#ToolID").val()+"'");
		sendDetails2.location.href = "pixel.php?fname="+$("#fname").val()+"&phone="+$("#phone").val()+"&email="+$("#email").val()+"&ToolID="+$("#ToolID").val();
	}
}


function detectDevice(tool){
var ua = navigator.userAgent; //Grab USER AGENT STRING
var checker = {webOS: ua.match(/webOS/),iphone: ua.match(/iPhone/),ipad: ua.match(/iPad/),ipod: ua.match(/iPod/),blackberry: ua.match(/BlackBerry/),android: ua.match(/Android/), symbian: ua.match(/Symbian/)};
 
//FIND PHONE OS TYPE
if (checker.android){
 //android code here
 //if(document.title == "Mobile Apps and Sites"){filterApps('Android');}
 deviceType = "Android";
 location.href = "iPhone/index.php" + tool;
 } 
else if (checker.webOS){
 //Windows phone code here code here
 deviceType = "webOS";
 location.href = "iPhone/index.php" + tool;
}     
else if (checker.iphone){
 deviceType = "iPhone";
 location.href = "iPhone/index.php" + tool;
}
else if (checker.ipad){
 //iPad code here
 deviceType = "iPad";
 //top.location.href = "https://www.facebook.com/Igul.Letova/app_377838455678034"
 }
else if (checker.ipod){
 //iPod code here
 deviceType = "iPod";
 location.href = "iPhone/index.php" + tool;
}   
else if (checker.blackberry){
 deviceType = "BlackBerry";
 location.href = "iPhone/index.php" + tool;
}  
else if (checker.symbian){
 deviceType = "Symbian";
 location.href = "iPhone/index.php" + tool;
}  
else {
 //unknown device code here
 deviceType = "Unknown";
 //top.location.href = "https://www.facebook.com/Igul.Letova/app_377838455678034"
 }
 //alert("deviceType=" + deviceType) 
}

function ShowMore(){
	$("#MoreBut").hide();
	$("#moreHolder").show();
	
	$("#chbLabel").css('top', 690+'px')
	$("#chb").css('top', 690+'px')
}


var isText = false;

function ShowText(){
	if(!isText){
		$("#text1").fadeIn(500);
		isText = true;
	}else{
		$("#text1").fadeOut(500);
		isText = false;
	}
}


function scrollToDiv(id)
{
  // Scroll
	//var p = $("#"+id);
	//var position = p.position();
	var topP = $("#"+id).offset().top;
	$('html,body').animate({scrollTop: topP + "px"},'slow');
	console.log("scroll=" + topP)
  //$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}

function scrollToH(h)
{
  // Scroll
  $('html,body').animate({scrollTop: h + "px"},'slow');
}