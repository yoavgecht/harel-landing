
function CheckPage(){
	var body = document.body,
    html = document.documentElement;
//
//var height = Math.max( body.scrollHeight, body.offsetHeight, 
//                       html.clientHeight, html.scrollHeight, html.offsetHeight );
//
//var width = Math.max( body.scrollWidth, body.offsetWidth, 
//                       html.clientWidth, html.scrollWidth, html.offsetWidth );
//
var width = html.clientWidth;
var height = html.clientHeight;


		var origWidth = 1920; 
		var origHeight = 1080; 
	
	var diff = width/height;
	if(diff < 1.7){
		proportion = width / origWidth;
	}else{
		proportion = height / origHeight;
	}
//proportion = width / origWidth;
	
	
		TweenLite.to("#MainDiv", 0.1, {scaleX:proportion, scaleY:proportion, transformOrigin:"left top", ease:Power2.easeIn});
//		TweenLite.to("#botText", 0.1, {scaleX:proportion, scaleY:proportion, transformOrigin:"right top", ease:Power2.easeIn});
//		TweenLite.to("#ThankYou", 0.1, {scaleX:proportion, scaleY:proportion, transformOrigin:"left top", ease:Power2.easeIn});
//		TweenLite.to("#FormDiv", 0.1, {scaleX:proportion, scaleY:proportion, transformOrigin:"left top", ease:Power2.easeIn});
//	
		var fLeft = (width - 1920*proportion)/2;
		$("#MainDiv").css('left', fLeft+'px');

//		var topLine = height - 160*proportion;
//		$("#botLine").css('height', 160*proportion+'px');
//		$("#botLine").css('top', topLine+'px');
//	
//		$("#formHolder").css('height', height+'px');
//		$("#formHolder").css('width', 535*proportion+'px');
//	
//		var fLeft = (535*proportion - 426*proportion)/2;
//		$("#ThankYou").css('left', fLeft+'px');
//		$("#FormDiv").css('left', fLeft+'px');
	
		/* access */
		var accessPow = 1;
		var pfW = (30*proportion*accessPow);
		var pfH = (30*proportion*accessPow);
		$("#accessIcon").css('width', pfW+'px');
		$("#accessIcon").css('height', pfH+'px');

		var pfW = (250*proportion*accessPow);
		var pfH = (180*proportion*accessPow);
		var pfL = (10*proportion*accessPow);
		var pfT = (35*proportion*accessPow);
		$("#accessMenu").css('width', pfW+'px');
		$("#accessMenu").css('height', pfH+'px');
		$("#accessMenu").css('right', pfL+'px');
		$("#accessMenu").css('top', pfT+'px');
		
		var pfW = (250*proportion*accessPow);
		var pfH = (40*proportion*accessPow);
		var pfF = (24*proportion*accessPow);
		$(".accessMenuItem").css('width', pfW+'px');
		$(".accessMenuItem").css('height', pfH+'px');
		$(".accessMenuItem").css('line-height', pfH+'px');
		$(".accessMenuItem").css('font-size', pfF+'px');
		
		var pfW = (1500*proportion*accessPow);
		var pfH = (1000*proportion*accessPow);
		$("#Accessibility_Statement").css('width', pfW+'px');
		$("#Accessibility_Statement").css('height', pfH+'px');
		
		var pfW = (40*proportion*accessPow);
		var pfH = (40*proportion*accessPow);
		var pfL = (-20*proportion*accessPow);
		var pfT = (-20*proportion*accessPow);
		$("#AccessClose").css('width', pfW+'px');
		$("#AccessClose").css('height', pfH+'px');
		$("#AccessClose").css('right', pfL+'px');
		$("#AccessClose").css('top', pfT+'px');
		
		var pfW = (1450*proportion*accessPow);
		var pfH = (960*proportion*accessPow);
		var pfL = (20*proportion*accessPow);
		var pfT = (0*proportion*accessPow);
		$(".AccessibilityText").css('width', pfW+'px');
		$(".AccessibilityText").css('height', pfH+'px');
		$(".AccessibilityText").css('right', pfL+'px');
		$(".AccessibilityText").css('top', pfT+'px');
		
		var pfF = (46*proportion*accessPow);
		var pfLH = (50*proportion*accessPow);
		$(".AccessibilityTitle").css('font-size', pfF+'px');
		$(".AccessibilityTitle").css('line-height', pfLH+'px');
		
		var pfF = (32*proportion*accessPow);
		var pfLH = (40*proportion*accessPow);
		$(".AccessibilitySubTitle").css('font-size', pfF+'px');
		$(".AccessibilitySubTitle").css('line-height', pfLH+'px');
		
		var pfF = (24*proportion*accessPow);
		var pfLH = (30*proportion*accessPow);
		$(".AccessibilityRegText").css('font-size', pfF+'px');
		$(".AccessibilityRegText").css('line-height', pfLH+'px');
		
		var mnW = (1000*proportion);
		var mnH = (650*proportion);
		$("#VideoOver").css('width', width+'px');
		$("#VideoOver").css('height', height+'px');
		

}

