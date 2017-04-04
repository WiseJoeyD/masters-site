function setString(str) {
	//alert(str);
    switch (str) {
      case "btnQueryString1":
		var url = "register.html?name=" + encodeURIComponent($("#courseTitle1").val());
        break;
      case "btnQueryString2":
		var url = "register.html?name=" + encodeURIComponent($("#courseTitle2").val());
        break;
      case "btnQueryString3":
		var url = "register.html?name=" + encodeURIComponent($("#courseTitle3").val());
        break;
      case "btnQueryString4":
		var url = "register.html?name=" + encodeURIComponent($("#courseTitle4").val());
        break;
      case "btnQueryString5":
		var url = "register.html?name=" + encodeURIComponent($("#courseTitle5").val());
        break;
      case "btnQueryString6":
		var url = "register.html?name=" + encodeURIComponent($("#courseTitle6").val());
        break;
      case "btnQueryString7":
		var url = "register.html?name=" + encodeURIComponent($("#courseTitle7").val());
        break;
      case "btnQueryString8":
		var url = "register.html?name=" + encodeURIComponent($("#courseTitle8").val());
        break;
      default:
        alert("Default");
        break;
    }
	window.location.href = url;
}

$(function() {
  $(".expand").on( "click", function() {
    $(this).next().slideToggle(200);
    $expand = $(this).find(">:first-child");
		
    if($expand.text() == "+") {
      $expand.text("-");
    } else {
      $expand.text("+");
    }
  });
});

$(document).on("click", ".open-MoreInfoDialog", function () {
     var moreInfo = $(this).data('moreinfo');
     $(".modal-body #moreInfoText").val( moreInfo );
});

function queryString7(str7){
	alert(str7);
	var url = "register.html?name=" + encodeURIComponent($("#courseTitle7").val());
	window.location.href = url;
}

function queryString8(str8){
	alert(str8);
	var url = "register.html?name=" + encodeURIComponent($("#courseTitle8").val());
	window.location.href = url;
}

var myCenter = new google.maps.LatLng(54.596040, -5.920646);

function initialize() {
var mapProp = {
  center:myCenter,
  zoom:15,
  scrollwheel:true,
  draggable:true,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
