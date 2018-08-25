'use strict';

(function($) {

	var elMap = $('.maps')[0];

	var markers = [
		{
			position: new google.maps.LatLng(51.4983713, 31.2891455),
			icon: "../icon/test.png"
		},
		{
			position: new google.maps.LatLng(51.5983713, 31.2891455),
			icon: "../icon/test.png"
		}
	];

	var uluru = {lat: 51.4983713, lng: 31.2891455};
	var uluru1 = {lat: 51.5983713, lng: 31.2891455};
	var uluru2 = {lat: 51.6983713, lng: 31.2891455};

	var mymap = new google.maps.Map(elMap, {
		zoom: 17,
		center: uluru
	});

	var marker = new google.maps.Marker({position: uluru, map: mymap, icon: "./icon/test.png"})
	var marker1 = new google.maps.Marker({position: uluru1, map: mymap})
	var marker2 = new google.maps.Marker({position: uluru2, map: mymap})

})(jQuery);