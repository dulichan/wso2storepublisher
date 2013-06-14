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


function getServiceURLs(item){
	
	var serverURL = "/publisher/api/"
	
	var urls =
		{
			"publisherAppList": "apps",
			"publishApp": "apps/{0}/{1}"
		};
	
	arguments[0] = urls[item];		
	return serverURL + String.format.apply(this, arguments);
	
}


function getPublisherAppList(){
	jQuery.ajax({
	      url: getServiceURLs("publisherAppList"), 
	      type: "GET",
	      dataType: "json",
	      success: function(apps) {
	      	 var template = Handlebars.compile($("#hbs-publisher-app-list").html());
	      	 $("#publisher-app-list").html(template({apps:apps}));
	      	 
	      	 $('.btn-command').click(function(e) {
	      	 	
	      	 	var app = $(this).data("app");
	      	 	var command = $(this).data("type");
				$.ajax({
			      type: "POST",
			      url: getServiceURLs("publishApp", app, command),			      
			      success: function () {
			       
			      }
			    });
			});			
			
  			
	      }				      
	});
}


