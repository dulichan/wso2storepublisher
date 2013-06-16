String.format = function() {
	var s = arguments[0];
	for (var i = 0; i < arguments.length - 1; i++) {
		var reg = new RegExp("\\{" + i + "\\}", "gm");
		s = s.replace(reg, arguments[i + 1]);
	}

	return s;
}

$(document).ready(function() {
	getPublisherAppList();
});

function getServiceURLs(item) {

	var serverURL = "/publisher/api/"

	var urls = {
		"publisherAppList" : "apps",
		"publisherAppListByStatus" : "apps?state={0}&sort=date",
		"publishApp" : "apps/{0}/{1}"
	};

	arguments[0] = urls[item];
	return serverURL + String.format.apply(this, arguments);

}

function getPublisherAppList() {

	getAppList("publisherAppListByStatus", "IN-REVIEW", "#publisher-app-list-pending");
	getAppList("publisherAppList", "ALL", "#publisher-app-list");
	getAppList("publisherAppListByStatus", "PUBLISHED", "#publisher-app-list-published");
	getAppList("publisherAppListByStatus", "REJECTED", "#publisher-app-list-rejected");
	

}

function getAppList(serviceURL, status, templateUI) {
	jQuery.ajax({
		url : getServiceURLs(serviceURL, status),
		type : "GET",
		dataType : "json",
		success : function(apps) {
			var template = Handlebars.compile($("#hbs-publisher-app-list").html());
			$(templateUI).html(template({apps : apps}));
			onCommandbuttonClick(templateUI);
		}
	});
}


function onCommandbuttonClick(templateUI) {

	$(templateUI).on("click", '.btn-command', function(event) {
		var app = $(this).data("app");
		var command = $(this).data("type");

		if (command == "remove") {
			bootbox.confirm("Are you sure you want to delete this app?", function(result) {
				if (result == true) {
					$.ajax({
						type : "POST",
						url : getServiceURLs("publishApp", app, command),
						success : function() {
							window.location.reload(true);
						}
					});
				}
			});
		} else if (command == "publish") {
			
			$.ajax({
				type : "POST",
				url : getServiceURLs("publishApp", app, command),
				success : function() {					
					bootbox.alert("App is sent to admin for approval");
					window.location.reload(true);
				}
			});
		}else if (command == "accept") {
			
			$.ajax({
				type : "POST",
				url : getServiceURLs("publishApp", app, command),
				success : function() {					
					bootbox.alert("App is accepted, published in the store");
					window.location.reload(true);
				}
			});
		}else if (command == "reject") {
			
			bootbox.prompt("Enter a message", function(result) {				
			if (result === null) {			
			} else {
				
				$.ajax({
				type : "POST",
				url : getServiceURLs("publishApp", app, command),
				dataType: "json",
				data: {message: result},
				success : function() {					
					window.location.reload(true);
				},
				error: function (xhr, ajaxOptions, thrownError) {
					window.location.reload(true);
				}
				});				
				
			}
			});
			
			
			
		}

	});

}

Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
	if (lvalue == rvalue) {
		return options.fn(this);
	}
});


Handlebars.registerHelper('lastdate', function(status, attri, options) {
	return moment(attri["overview_" + status + "_date"]).format( "DD-MM-YYYY");
});
