//=====================================
//Ezeket akár egyben is meg lehetne írni vmi JSON-ös paraméterezéssel

//Hide splash window
function hideSplash(){
	$("#splash").css("display","none");
	$("#heading, #leftPanel, #rightPanel, #timeSlider, #legend, #colophonIcon, #infoIcon, #theme").css({
        "pointer-events" : "auto"
    });
}

//The function that shows and hides infowindow
function controlInfoBox(){
    if ($("#infoBox").css("display") == "block"){
		$("#infoBox").css("display","none");
		$("#heading, #leftPanel, #rightPanel, #timeSlider, #legend, #colophonIcon, #theme").css({
            "pointer-events" : "auto"
        });
    }
    else{
		$("#infoBox").css("display","block");
        //$("#map, #heading, #chart, #table, #timeSlider, #legend")
		$("#heading, #leftPanel, #rightPanel, #timeSlider, #legend, #colophonIcon, #theme").css({
            "pointer-events" : "none"
        });
		$("#infoIcon").css("pointer-events","auto");
    }
}

//The function that shows and hides the colophon ("Created by") window
function controlColophonBox(){
    if ($("#colophon").css("display") == "block"){
		$("#colophon").css("display","none");
		$("#heading, #leftPanel, #rightPanel, #timeSlider, #legend, #infoIcon, #theme").css({
            "pointer-events" : "auto"
        });
    }
    else{
		$("#colophon").css("display","block");
		$("#heading, #leftPanel, #rightPanel, #timeSlider, #legend, #infoIcon, #theme").css({
            "pointer-events" : "none"
        });
		$("#colophonIcon").css("pointer-events","auto");
    }
}

//=====================================
