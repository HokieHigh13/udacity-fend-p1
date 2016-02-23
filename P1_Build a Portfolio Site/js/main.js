/*

My Custom JS
============

Author:  Tyler Campbell
Updated: February 2016

*/

/* Since the format of the three images representing coding languages makes a drastic change after a certain break point, it was easier to utilize JavaScript to determine the right code*/

var largeView ='<div class="col-sm-4 col-md-4 col-lg-4" id="code"><div class="row"><picture><source srcset="images/html9-85.svg" media="(min-width: 1200px)"><source srcset="images/html9-85.svg" media="(min-width: 992px)"><source srcset="images/html9-75.svg" media="(min-width: 768px)"><img src="images/html9-100.svg" class="pull-left"></picture></div><div class="row"><picture><source srcset="images/css5-85.svg" media="(min-width: 1200px)"><source srcset="images/css5-85.svg" media="(min-width: 992px)"><source srcset="images/css5-75.svg" media="(min-width: 768px)"><img src="images/css5-100.svg" class="center-block"></picture></div><div class="row"><picture><source srcset="images/js2-85.svg" media="(min-width: 1200px)"><source srcset="images/js2-85.svg" media="(min-width: 992px)"><source srcset="images/js2-75.svg" media="(min-width: 768px)"><img src="images/js2-100.svg" class="pull-right"></picture></div></div>'

var smallView ='<div class="row" id="code"><div class="col-xs-4"><img src="images/html9-75.svg" class="pull-right"></div><div class="col-xs-4"><img src="images/css5-75.svg" class="center-block"></div><div class="col-xs-4"><img src="images/js2-75.svg" class="pull-left"></div></div>'

$(function() {
    
    /* Creates a listener and a break point */
    
    if (matchMedia) {
        
        x = window.matchMedia("(min-width: 768px)");
        x.addListener(WidthChange);
        WidthChange(x);
    }
    
    function WidthChange(x) {
        
        if (x.matches) {
            
            /* Changes the size of the placeholder image */
            $('#thumbImage img').attr('src','http://placehold.it/300x150');
            
            /* Adjusts position of the satellite image */
            document.getElementById("satelliteImage").className="pull-right";
            
            /* Selects the largeView format */
            $("div #code").replaceWith(largeView); 
            
            /* Ensure the About and Portfolio tabs are properly positioned*/
            document.getElementById("header").className="nav navbar-nav pull-right";
            
            /* Changes heading */
            $('div.caption h5').contents().unwrap().wrap('<h4/>'); 
            
            
        } else {
            
            /* Adjusts position of the satellite image */
            document.getElementById("satelliteImage").className="center-block";
            
            /* Selects the smallView format */
            $("div #code").replaceWith(smallView);
            
            /* Ensure the About and Portfolio tabs are properly positioned */
            document.getElementById("header").className = "nav navbar-nav pull-left";
            
            /* Changes the size of the placeholder image */
            $('#thumbImage img').attr('src','http://placehold.it/215x100');
            
            /* Changes heading */
            $('div.caption h4').contents().unwrap().wrap('<h5/>'); 
            
            /* Ensures the drop down menu collapses after selecting which page to view  */
            $("#about, #portfolio").click(function () {
                
                $("#navbar").collapse('hide');
                
            });
        }
    }    
}); 