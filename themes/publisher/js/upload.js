var appMetaData = null;

$('#application-tab a').click(function(e) {
	e.preventDefault();
	$(this).tab('show');
});


 $(window).on('load', function () {
            $('.selectpicker').selectpicker();
          //  $('#modal-upload').modal('show');
 });
 
 
$('#txtOS').on("change",function() {
	  if($('#txtOS').val() == 'webapp'){
		  $('#control-webapp').show();
	  }else{
		  $('#control-webapp').hide();
	  }
});


$('#txtMarket').on("change",function() {
	  if($('#txtMarket').val() == 'Market'){
		  $('#control-packagename').show();
	  }else{
		  $('#control-packagename').hide();
	  }
});


$('#btn-app-save').click(function(e) {
	
	var name = $("#txtName").val();
	var description = $("#txtDescription").val();
	var category = $("#txtCategory").val();
	var recentChanges = $("#txtRecentChanges").val();
	var banner = $("#txtbanner").val();
	var screenShot1 = $("#txtScreenShot1").val();
	var screenShot2 = $("#txtScreenShot2").val();
	var screenShot3 = $("#txtScreenShot3").val();	
	var iconfile = $("#txtIconfile").val();
	var isMeetGudeLines = $("#chkMeetGudeLines").val();
	
	var params = {
        name: name,
        description: description,
        category: category,
        recentChanges: recentChanges,
        banner: banner,
        screenShot1: screenShot1,
        screenShot2: screenShot2,
        screenShot3: screenShot3,
        iconfile: iconfile,
        isMeetGudeLines: isMeetGudeLines,
        url: "downloads/agent.apk",
        provider: "wso2",
        version: "1.0",
        metadata : appMetaData	
     };
	
	alert(params);
	$.ajax({
      type: "POST",
      url: "/publisher/api/apps",
      contentType: "application/json",
      data: JSON.stringify(params),
      success: function () {
        alert("Data Uploaded: ");
      }
    });
});


$(document).ready(function(){

	$('#txtAppUpload').fileuploadFile({
        dataType: 'json',
       	add: function (e, data) {
		           $('#btn-app-upload').click(function () {
		                    //data.context = $('<p/>').text('Uploading...').replaceAll($(this));
		                    data.submit();
		                });
		        },
		        done: function (e, data) {
		        	//appMetaData = data._response.result;
					$('#appmeta').val(JSON.stringify(data._response.result));
		        	//$('#txtWebapp').val(data._response.result[0]);
		            //alert();
		        }

	});

});


// $('#btn-app-upload').click(function(e) {
// 	alert('see');
// 
// 	// $.ajax({
// 	//       type: "POST",
// 	//       url: "/publisher/api/apps/upload1",
// 	//   processData : false,
// 	//   contentType : 'multipart/form-data',
// 	//       data: appUpload,
// 	//       success: function (data) {
// 	//         alert("Data Uploaded: "+data);
// 	//       }
// 	//     });
// });

