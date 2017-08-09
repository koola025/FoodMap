/*jslint browser: true*/
/*global $, jQuery*/






$(function () {
	$('ul.nav a').bind('click', function (event) {
		var $anchor = $(this).attr("href");
		$('#content').animate({
			scrollLeft: $('#content').scrollLeft() + $($anchor).offset().left - $(window).width()/10
		}, 500);
		event.preventDefault();
	});
     
});

$(function () {
    var theColor = "lightgray";
    $('ul.nav a').on('mouseover', function () {
                            $(this).css({"color": "white"});  
	});
    $('ul.nav a').mouseout(function () {
                            $(this).css({"color": theColor});  
                            theColor = "lightgray";
	});
    $('ul.nav a').click(function () {
                            $('ul.nav a').css({"color": "lightgray"}); 
                            $(this).css({"color": "white"});  
                            theColor = "white";
    
	});
    $('div.menuBox').click(function () {
                            $('div.menuBox').css({"border-bottom": "0px lightgray solid"}); 
                            $(this).css({"border-bottom": "3px white solid"});  
                          
	});
    
    $('button.fastfoodlink').click(function(){
        var i, fastfooddetail, cell;
        fastfooddetail = document.getElementsByClassName("fastfooddetail");
        for (i = 0; i < fastfooddetail.length; i++) {
            fastfooddetail[i].style.display = "none";
        }
        
        cell = document.getElementsByClassName("cell");
        for (i = 0; i < cell.length; i++) {
            cell[i].style.display = "block";
        }
                          
	});
});

var locations = [
                    ['立晉傳統豆花', 24.796852, 120.998395, 6,'lginformation','Ligin.jpg'],
                    ['九湯屋日本拉麵', 24.797655, 120.996078, 5,'nsinformation','NineSoup.jpg'],
                    ['榮茂滷肉飯', 24.797881, 120.996055, 4,'rminformation','RonMow.jpg'],
                    ['Milk Shop', 24.798229, 120.997206, 3,'msinformation','MilkShop.JPG'],
                    ['Mos Burger', 24.797058, 120.996852, 2,'mbinformation','MosBurger.jpg'],
                    ['三層山', 24.792746, 121.002568, 1,'tlminformation','ThreeLayerMountain.jpg']
                ];

function hide () {
    var i, tabcontent;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

			//addMarker(24.798229, 120.997206,'Milk Shop', 'MilkShopDetail','milkshopmap','msinformation','MilkShop.JPG');
            //addMarker(24.797058,120.996852,'Mos Burger','MosBurgerDetail','mosburgermap','mbinformation','MosBurger.jpg');
            
            
            //addMarker(24.794760,120.993204,'NTHU');
            
                
                var latlng = new google.maps.LatLng(24.794760, 120.993204);
                var styles = [

                {

                    featureType: "landscape",

                    stylers: [

                        {
				"hue": "#0064FF"
			},
			{
				"saturation": -16.400000000000006
			},
			{
				"lightness": -84.4
			},
			{
				"gamma": 1
			}

                    ]

                },{

                    featureType: "natural",

                    stylers: [

                        {
				"hue": "#FFffff"
			}

                    ]

                },
                {
		"featureType": "water",
		"stylers": [
			{
				"hue": "#FF0049"
			},
			{
				"saturation": 82.4
			},
			{
				"lightness": 47.19999999999999
			},
			{
				"gamma": 1
			}
		]
	},{

                    featureType: "road",

                    stylers: [

                        {
				"hue": "#FF004F"
			},
			{
				"saturation": 72.4
			},
			{
				"lightness": 2.59999999999998
			},
			{
				"gamma": 1
			}

                    ]

                },{
                    featureType: "building",

                    elementType: "labels",

                    stylers: [

                        {
				"hue": "#FF004D"
			},
			{
				"saturation": 74.4
			},
			{
				"lightness": 41
			},
			{
				"gamma": 1
			}

                    ]

                },{

                    featureType: "poi", //points of interest

                    stylers: [

                        {
				"hue": "#FF004D"
			},
			{
				"saturation": 74.4
			},
			{
				"lightness": 41
			},
			{
				"gamma": 1
			}

                    ]

                }/*,
                {
                    stylers:[
                        { hue: '#F35F8D' }
                    ]
                }*/

            ];
                var myOptions = {
                    zoom: 14,
                    center: latlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: true,
                    styles: styles

                };
                map = new google.maps.Map(document.getElementById('map'), myOptions);

                var infowindow = new google.maps.InfoWindow();

                var mark, j;

                for (j = 0; j < locations.length; j++) {  
                    mark = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[j][1], locations[j][2]),
                    map: map
                    });

                    google.maps.event.addListener(mark, 'click', (function(mark, j) {
                        return function() {
                            infowindow.setContent(locations[j][0]);
                            infowindow.open(map, mark);
                            document.getElementById('bridgetitle').innerHTML = locations[j][0];
                            document.getElementById('bridgeinfo').innerHTML = document.getElementById(locations[j][4]).innerHTML;
                            document.getElementById('bridgeimage').src = locations[j][5];
                        }
                    })(mark, j));
                }
            
    
    
    document.getElementById("defaultslide").click();
    document.getElementById("milkshopdefault").click();
    document.getElementById("threelayermountaindefault").click();
    document.getElementById("ronmowdefault").click();
    document.getElementById("ninesoupdefault").click();
    document.getElementById("ligindefault").click();
    
}

function random () {
    var choice = Math.floor(Math.random()*100%6);
    document.getElementById('choicetitle').innerHTML = locations[choice][0];
                            document.getElementById('choiceinfo').innerHTML = document.getElementById(locations[choice][4]).innerHTML;
                            document.getElementById('choiceimage').src = locations[choice][5];
}








/*function addMarker (lat,lng,title,detail,detailmap,information,theimg) {
    
    var latlng = new google.maps.LatLng(24.794760, 120.993204);
    var styles = [

                {

                    featureType: "landscape",

                    stylers: [

                        {
				"hue": "#0064FF"
			},
			{
				"saturation": -16.400000000000006
			},
			{
				"lightness": -84.4
			},
			{
				"gamma": 1
			}

                    ]

                },{

                    featureType: "natural",

                    stylers: [

                        {
				"hue": "#FFffff"
			}

                    ]

                },
                {
		"featureType": "water",
		"stylers": [
			{
				"hue": "#FF0049"
			},
			{
				"saturation": 82.4
			},
			{
				"lightness": 47.19999999999999
			},
			{
				"gamma": 1
			}
		]
	},{

                    featureType: "road",

                    stylers: [

                        {
				"hue": "#FF004F"
			},
			{
				"saturation": 72.4
			},
			{
				"lightness": 2.59999999999998
			},
			{
				"gamma": 1
			}

                    ]

                },{
                    featureType: "building",

                    elementType: "labels",

                    stylers: [

                        {
				"hue": "#FF004D"
			},
			{
				"saturation": 74.4
			},
			{
				"lightness": 41
			},
			{
				"gamma": 1
			}

                    ]

                },{

                    featureType: "poi", //points of interest

                    stylers: [

                        {
				"hue": "#FF004D"
			},
			{
				"saturation": 74.4
			},
			{
				"lightness": 41
			},
			{
				"gamma": 1
			}

                    ]

                }
            ];
    var myOptions = {
                zoom: 14,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                styles: styles

    };
    map = new google.maps.Map(document.getElementById('map'), myOptions);
    var image = new google.maps.MarkerImage("map_icon.png",null,null,null,new google.maps.Size(120, 90));
    var marker = new google.maps.Marker({
                position: {lat: 24.798229, lng: 120.997206},
                map: map,
                title: 'Milk Shop',
                icon: image
    },{
                position: {lat: 24.797058, lng: 120.996852},
                map: map,
                title: 'Mos Burger',
                icon: image
    }); 
    
    //infowindow = new google.maps.InfoWindow(); 
    google.maps.event.addListener(marker,'click',function () {
            //infowindow.setContent(title); 
              //  infowindow.setPosition(marker.position); 
                //infowindow.open(map);
                
            document.getElementById('bridgetitle').innerHTML = title;
            document.getElementById('bridgeinfo').innerHTML = document.getElementById(information).innerHTML;
            document.getElementById('bridgeimage').src = theimg;
        
            });
    
}*/

function openCity (evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openDetail (evt, restaurantName, mapid, coordslat, coordslng, titlename) {
    // Declare all variables
    var i, detail, cell;

    // Get all elements with class="tabcontent" and hide them
    detail = document.getElementsByClassName("detail");
    for (i = 0; i < detail.length; i++) {
        detail[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    cell = document.getElementsByClassName("cell");
    for (i = 0; i < cell.length; i++) {
        cell[i].className = cell[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(restaurantName).style.display = "block";
    evt.currentTarget.className += " active";
    
    var latlng = new google.maps.LatLng(coordslat, coordslng);

			var styles =[

                {

                    featureType: "landscape",

                    stylers: [

                        {
				"hue": "#0064FF"
			},
			{
				"saturation": -16.400000000000006
			},
			{
				"lightness": -84.4
			},
			{
				"gamma": 1
			}

                    ]

                },{

                    featureType: "natural",

                    stylers: [

                        {
				"hue": "#FFffff"
			}

                    ]

                },
                {
		"featureType": "water",
		"stylers": [
			{
				"hue": "#FF0049"
			},
			{
				"saturation": 82.4
			},
			{
				"lightness": 47.19999999999999
			},
			{
				"gamma": 1
			}
		]
	},{

                    featureType: "road",

                    stylers: [

                        {
				"hue": "#FF004F"
			},
			{
				"saturation": 72.4
			},
			{
				"lightness": 2.59999999999998
			},
			{
				"gamma": 1
			}

                    ]

                },{
                    featureType: "building",

                    elementType: "labels",

                    stylers: [

                        {
				"hue": "#FF004D"
			},
			{
				"saturation": 74.4
			},
			{
				"lightness": 41
			},
			{
				"gamma": 1
			}

                    ]

                },{

                    featureType: "poi", //points of interest

                    stylers: [

                        {
				"hue": "#FF004D"
			},
			{
				"saturation": 74.4
			},
			{
				"lightness": 41
			},
			{
				"gamma": 1
			}

                    ]

                }/*,
                {
                    stylers:[
                        { hue: '#F35F8D' }
                    ]
                }*/

            ];
            var myOptions = {

                zoom: 14,

                center: latlng,

                mapTypeId: google.maps.MapTypeId.ROADMAP,

                disableDefaultUI: true,

                styles: styles

            };

			map = new google.maps.Map(document.getElementById(mapid), myOptions);
            var image = new google.maps.MarkerImage("map_icon.png",null,null,null,new google.maps.Size(120, 90));
            var marker = new google.maps.Marker({
                position: {lat: coordslat, lng: coordslng},
                map: map,
                title: titlename,
                icon: image
            });   
    
}






/*function backToCell() {
    var i, detail, cell;
    
    cell = document.getElementsByClassName("cell");
    for (i = 0; i < cell.length; i++) {
        cell[i].style.display = "block";
    }
    
    detail = document.getElementsByClassName("detail");
    for (i = 0; i < detail.length; i++) {
        detail[i].style.display = "none";
    }
    
}*/


// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('card');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n,mySlides,demo) {
  showSlides(slideIndex += n,mySlides,demo);
}

function currentSlide(n,mySlides,demo) {
  showSlides(slideIndex = n,mySlides,demo);
}

function showSlides(n,mySlides,demo) {
  var i;
  var slides = document.getElementsByClassName(mySlides);
  var dots = document.getElementsByClassName(demo);
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slideactive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slideactive";
  
}


/*$(document).ready(function () {
    "use strict";
    $(".menuItem").click(function (event) {
        var $link = $(this).attr("href");
        $("#mainContent").animate({
            scrollLeft: $("#mainContent").scrollLeft() + $($link).offset().left
        }, 500);
        
        event.preventDefault();
    });
});*/