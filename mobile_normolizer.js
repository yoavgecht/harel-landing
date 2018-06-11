
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


		var origWidth = 640; 
		var origHeight = 1080; 
	
	var diff = width/height;
	if(diff < 1.7){
		proportion = width / origWidth;
	}else{
		proportion = height / origHeight;
	}
proportion = width / origWidth;
	

		TweenLite.to("#MainDiv", 0.1, {scaleX:proportion, scaleY:proportion, transformOrigin:"left top", ease:Power2.easeIn});
	
		$("#click2call").css('width', 110*proportion+'px');
		$("#click2call").css('height', 114*proportion+'px');
		$("#click2call").css('top', 270*proportion+'px');
		
	
		/* access */
		var accessPow = 1;
		var pfW = (40*proportion*accessPow);
		var pfH = (40*proportion*accessPow);
		$("#accessIcon").css('width', pfW+'px');
		$("#accessIcon").css('height', pfH+'px');

		var pfW = (250*proportion*accessPow);
		var pfH = (180*proportion*accessPow);
		var pfL = (10*proportion*accessPow);
		var pfT = (40*proportion*accessPow);
		$("#accessMenu").css('width', pfW+'px');
		$("#accessMenu").css('height', pfH+'px');
		$("#accessMenu").css('right', pfL+'px');
		$("#accessMenu").css('top', pfT+'px');
		
		var pfW = (250*proportion*accessPow);
		var pfH = (40*proportion*accessPow);
		var pfF = (26*proportion*accessPow);
		$(".accessMenuItem").css('width', pfW+'px');
		$(".accessMenuItem").css('height', pfH+'px');
		$(".accessMenuItem").css('font-size', pfF+'px');
		$(".accessMenuItem").css('line-height', pfH+'px');
		
		var pfW = (640*proportion*accessPow);
		var pfH = (1500*proportion*accessPow);
		$("#Accessibility_Statement").css('width', pfW+'px');
		$("#Accessibility_Statement").css('height', pfH+'px');
		
		var pfW = (30*proportion*accessPow);
		var pfH = (30*proportion*accessPow);
		var pfL = (15*proportion*accessPow);
		var pfT = (15*proportion*accessPow);
		$("#AccessClose").css('width', pfW+'px');
		$("#AccessClose").css('height', pfH+'px');
		$("#AccessClose").css('right', pfL+'px');
		$("#AccessClose").css('top', pfT+'px');
		
		var pfW = (590*proportion*accessPow);
		var pfH = (1450*proportion*accessPow);
		var pfL = (50*proportion*accessPow);
		var pfT = (0*proportion*accessPow);
		$(".AccessibilityText").css('width', pfW+'px');
		$(".AccessibilityText").css('height', pfH+'px');
		$(".AccessibilityText").css('right', pfL+'px');
		$(".AccessibilityText").css('top', pfT+'px');
		
		var pfF = (42*proportion*accessPow);
		var pfLH = (50*proportion*accessPow);
		$(".AccessibilityTitle").css('font-size', pfF+'px');
		$(".AccessibilityTitle").css('line-height', pfLH+'px');
		
		var pfF = (34*proportion*accessPow);
		var pfLH = (40*proportion*accessPow);
		$(".AccessibilitySubTitle").css('font-size', pfF+'px');
		$(".AccessibilitySubTitle").css('line-height', pfLH+'px');
		
		var pfF = (24*proportion*accessPow);
		var pfLH = (32*proportion*accessPow);
		$(".AccessibilityRegText").css('font-size', pfF+'px');
		$(".AccessibilityRegText").css('line-height', pfLH+'px');

		var mnW = (640*proportion);
		var mnH = (1100*proportion);
		$("#VideoOver").css('width', mnW+'px');
		$("#VideoOver").css('height', mnH+'px');
		

}

