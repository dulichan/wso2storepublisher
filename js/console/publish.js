$('#application-tab a').click(function(e) {
	e.preventDefault();
	$(this).tab('show');
});


 $(window).on('load', function () {
            $('.selectpicker').selectpicker();
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
        version: "1.0"
     };
	
	
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

