var myNav = document.getElementById("nav-back");
window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 200) {
    myNav.classList.add("scrolled !important");
    myNav.classList.remove("bg-light");
  }
};

jQuery(function($) {
  function init_map1() {
    var myLocation = new google.maps.LatLng(38.885516, -77.09327200000001);
    var mapOptions = {
      center: myLocation,
      zoom: 16
    };
    var marker = new google.maps.Marker({
      position: myLocation,
      title: "Property Location"
    });
    var map = new google.maps.Map(document.getElementById("map1"), mapOptions);
    marker.setMap(map);
  }
  init_map1();
});
