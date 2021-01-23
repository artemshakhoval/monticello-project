"use strict";

// MENU BURGER
// $( document ).ready(function(){
//   $( "#menu-toggle" ).click(function(){ 
//   $( ".menu__list" ).slideToggle();
//   $( ".menu__list" ).addClass("active");
//   })
// });
// LIST ACTIVE
$('.list__item').click(function () {
  if ($(this).hasClass('active') == true) {
    $(this).removeClass('active');
  } else {
    $('.list__item.active').removeClass('active');
    $(this).addClass('active');
  }
}); // FILTRATION

$('.list__filtered .filtered__link').on('click', function () {
  $('.list__filtered .filtered__item').removeClass('active');
  $(this).parent('filtered__item').addClass('active');
  var item = $(this).attr('data-filter');

  if (item == 'all') {
    $('.content__images .images__container').show();
  } else {
    $('.content__images .images__container').hide();
    $('.content__images .images__container[data-filter="' + item + '"]').show();
  }
}); // FORM VALIDATION

$(document).ready(function () {
  var validName = false;
  var validEmail = false;
  $("form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    $(".error").remove();

    if (name == "") {
      $('#name').after('<span class="form__error">This field is required</span>');
      validName = false;
    } else {
      validName = true;
    }

    if (email == "") {
      $('#email').after('<span class="form__error">This field is required</span>');
      validEmail = false;
    } else {
      validEmail = true;
    }

    if (validName == true && validEmail == true) {
      $("form").unbind('submit').submit();
    }
  });
}); // SLICK-SLIDER

$(document).ready(function () {
  $('.slick__header').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
}); // Transition

$(".item__link").on('click', function () {
  var wrapperSection = $(this).attr('href');
  var wrapperSectionPosition = $(wrapperSection).offset().top;
  $('html, body').animate({
    scrollTop: wrapperSectionPosition
  }, 1000);
});
$(".arrow__transition").on('click', function () {
  var headerArrow = $(this).attr('href');
  var wrapperGalleryPosition = $(headerArrow).offset().top;
  $('html, body').animate({
    scrollTop: wrapperGalleryPosition
  }, 1000);
}); // FANCYBOX
// $("[data-fancybox]").fancybox();
// MAP

function initMap() {}

initMap = function initMap() {
  var myLatLng = {
    lat: 46.96092520489327,
    lng: 32.020104540237384
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
    disableDefaultUI: true,
    mapTypeControl: true,
    styles: [{
      elementType: "geometry",
      stylers: [{
        color: "#f5f5f5"
      }]
    }, {
      elementType: "labels.icon",
      stylers: [{
        visibility: "off"
      }]
    }, {
      elementType: "labels.text.fill",
      stylers: [{
        color: "#616161"
      }]
    }, {
      elementType: "labels.text.stroke",
      stylers: [{
        color: "#f5f5f5"
      }]
    }, {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#bdbdbd"
      }]
    }, {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{
        color: "#eeeeee"
      }]
    }, {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#757575"
      }]
    }, {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{
        color: "#e5e5e5"
      }]
    }, {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#9e9e9e"
      }]
    }, {
      featureType: "road",
      elementType: "geometry",
      stylers: [{
        color: "#ffffff"
      }]
    }, {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#757575"
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{
        color: "#dadada"
      }]
    }, {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#616161"
      }]
    }, {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#9e9e9e"
      }]
    }, {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{
        color: "#e5e5e5"
      }]
    }, {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{
        color: "#eeeeee"
      }]
    }, {
      featureType: "water",
      elementType: "geometry",
      stylers: [{
        color: "#c9c9c9"
      }]
    }, {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#9e9e9e"
      }]
    }]
  });
  var image = new google.maps.MarkerImage("./source/img/marker.png", new google.maps.Size(130, 130), new google.maps.Point(0, 0), new google.maps.Point(22, 32));
  var marker = new google.maps.Marker({
    position: myLatLng,
    icon: image,
    map: map,
    title: "Beetroot Academy"
  });
};