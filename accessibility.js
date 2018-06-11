// JavaScript Document



function clearContrast(){
	$("#allDiv").removeClass("contrast-low");
	$("#allDiv").removeClass("contrast-hight");
	ShowAMenu(false);
}

function setContrast(val){
	clearContrast();
	$("#allDiv").addClass("contrast-"+val);
	ShowAMenu(false);
}
	
var isMenuOpened = false;
function ShowAMenu(view){
	if(view){
		if(!isMenuOpened){
			$("#accessMenu").show();
			isMenuOpened = true;
		}else{
			$("#accessMenu").hide();
			isMenuOpened = false;	
		}
	}else{
		$("#accessMenu").hide();
			isMenuOpened = false;	
	}
}

function ShowAcsText(view){
	if(view){
		$("#Accessibility_Statement").show();
		$("#VideoOver").show();
	window.location.hash = "accText1";
	}else{
		$("#Accessibility_Statement").hide();
		$("#VideoOver").hide();
	window.location.hash = "top";
	}
	ShowAMenu(false);
}


$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        ShowAMenu(false);
		ShowAcsText(false);
    }
});

var CurPop = 0;
function ShowPopup(id){
	if(id != 0){
		$("#PopupHolder").show();
		$("#VideoOver").show();
		$("#pop"+id).show();
	window.location.hash = "pop"+id;
	}else{
		$("#PopupHolder").hide();
		$("#VideoOver").hide();
		$("#pop"+CurPop).hide();
	window.location.hash = "sr"+CurPop;
	
	}
	CurPop = id;
}

