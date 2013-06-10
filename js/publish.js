$('#application-tab a').click(function(e) {
	e.preventDefault();
	$(this).tab('show');
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
	
	$.ajax({
      type: "POST",
      url: "apps/upload",
      enctype: 'multipart/form-data',
      data: {
        name: name,
        description: description,
        category: category,
        recentChanges: recentChanges,
        banner: banner,
        screenShot1: screenShot1,
        screenShot2: screenShot2,
        screenShot3: screenShot3,
        iconfile: iconfile,
        isMeetGudeLines: isMeetGudeLines
      },
      success: function () {
        alert("Data Uploaded: ");
      }
    });
});


$('#btn-app-upload').click(function(e) {
	
	var appUpload = $("#txtAppUpload").val();	
	$.ajax({
      type: "POST",
      url: "apps/upload",
      enctype: 'multipart/form-data',
      data: {       
        appUpload: appUpload       
      },
      success: function () {
        alert("Data Uploaded: ");
      }
    });
});