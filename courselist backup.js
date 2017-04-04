function queryString1(str1){
	var url = "register.html?name=" + encodeURIComponent($("#courseTitle1").val());
	window.location.href = url;
}

function queryString2(str2){
	var url = "register.html?name=" + encodeURIComponent($("#courseTitle2").val());
	window.location.href = url;
}

function queryString3(str3){
	var url = "register.html?name=" + encodeURIComponent($("#courseTitle3").val());
	window.location.href = url;
}

function queryString4(str4){
	var url = "register.html?name=" + encodeURIComponent($("#courseTitle4").val());
	window.location.href = url;
}

function queryString5(str5){
	var url = "register.html?name=" + encodeURIComponent($("#courseTitle5").val());
	window.location.href = url;
}

function queryString6(str6){
	var url = "register.html?name=" + encodeURIComponent($("#courseTitle6").val());
	window.location.href = url;
}

function queryString7(str7){
	var url = "register.html?name=" + encodeURIComponent($("#courseTitle7").val());
	window.location.href = url;
}

function queryString8(str8){
	var url = "register.html?name=" + encodeURIComponent($("#courseTitle8").val());
	window.location.href = url;
}


function test(str) {
	alert(str);
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


/*$(function () {
    $("#btnQueryString1").bind("click", function () {
            var url = "register.html?name=" + encodeURIComponent($("#courseTitle1").val());
            <!-- var url = "register.html?name=" + encodeURIComponent($("#courseTitle").val()) + "&technology=" + encodeURIComponent($("#ddlTechnolgy").val()); -->
            window.location.href = url;
        });
	$("#btnQueryString2").bind("click", function () {
            var url = "register.html?name=" + encodeURIComponent($("#courseTitle2").val());
            <!-- var url = "register.html?name=" + encodeURIComponent($("#courseTitle").val()) + "&technology=" + encodeURIComponent($("#ddlTechnolgy").val()); -->
            window.location.href = url;
        });
	$("#btnQueryString3").bind("click", function () {
            var url = "register.html?name=" + encodeURIComponent($("#courseTitle3").val());
            <!-- var url = "register.html?name=" + encodeURIComponent($("#courseTitle").val()) + "&technology=" + encodeURIComponent($("#ddlTechnolgy").val()); -->
            window.location.href = url;
        });
	$("#btnQueryString4").bind("click", function () {
            var url = "register.html?name=" + encodeURIComponent($("#courseTitle4").val());
            <!-- var url = "register.html?name=" + encodeURIComponent($("#courseTitle").val()) + "&technology=" + encodeURIComponent($("#ddlTechnolgy").val()); -->
            window.location.href = url;
        });
    $("#btnQueryString5").bind("click", function () {
            var url = "register.html?name=" + encodeURIComponent($("#courseTitle5").val());
            <!-- var url = "register.html?name=" + encodeURIComponent($("#courseTitle").val()) + "&technology=" + encodeURIComponent($("#ddlTechnolgy").val()); -->
            window.location.href = url;
        });
	$("#btnQueryString6").bind("click", function () {
            var url = "register.html?name=" + encodeURIComponent($("#courseTitle6").val());
            <!-- var url = "register.html?name=" + encodeURIComponent($("#courseTitle").val()) + "&technology=" + encodeURIComponent($("#ddlTechnolgy").val()); -->
            window.location.href = url;
        });
	$("#btnQueryString7").bind("click", function () {
            var url = "register.html?name=" + encodeURIComponent($("#courseTitle7").val());
            <!-- var url = "register.html?name=" + encodeURIComponent($("#courseTitle").val()) + "&technology=" + encodeURIComponent($("#ddlTechnolgy").val()); -->
            window.location.href = url;
        });
	$("#btnQueryString8").bind("click", function () {
            var url = "register.html?name=" + encodeURIComponent($("#courseTitle8").val());
            <!-- var url = "register.html?name=" + encodeURIComponent($("#courseTitle").val()) + "&technology=" + encodeURIComponent($("#ddlTechnolgy").val()); -->
            window.location.href = url;
        });
    });
*/
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
	 	 ////alert("Book ID is " + moreInfo);
     // As pointed out in comments, 
     // it is superfluous to have to manually call the modal.
     // $('#addBookDialog').modal('show');
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
