var selectedFeature = null;
var featuresList = null;
var groupsList = null;


$(document).ready(function() {    	
  	loadFeatures();
  	loadGroups();
  	
  	
});


function loadFeatures(){
	
	var featureHTML = "";
	
	jQuery.ajax({
	      url: _MDM_SERVER_URI + "/features", 
	      type: "GET",
	      dataType: "json",
	      success: function(features) 
	      {
	      	 featuresList = features;
	      	 
	      	 var template = Handlebars.compile($("#hbs-feature-list").html());
	      	 $("#feature-list").html(template({features:features}));
	      	 
	      	 
	      	 //drag and drop operation
	      	 $('#feature-list').find('.features-list').draggable(
	    		{revert: true,
	    		start: function() {
	    				var featureId = $(this).data("feature-id");
                		selectedFeature = features[featureId];	    				
	    				featureHTML = $(this).html();
	    				var imageIco = $(this).find(".feature-icon").attr("src");
	    				$(this).html('<img src="' + imageIco + '">');                                   
                },
                stop: function() {                			    				
                        $(this).html(featureHTML);              
                }                
                
			});	      	 
	      }
	 });     
}




function loadGroups(){	
	
	jQuery.ajax({
	      url: _MDM_SERVER_URI + "/webconsole/devices", 
	      type: "GET",
	      dataType: "json",
	      success: function(groups) 
	      {
	      	  groupsList = groups;
	      	  
	      	  var template = Handlebars.compile($("#hbs-groups-list").html());
	      	  $("#groups-list").html(template({groups:groups}));	    	  
	      	  
	      	  
	      	  $('#groups-list').find('.user-groups').droppable({
		    		tolerance: "pointer",
	                drop: function() {	                	
						var group = groupsList[$(this).data("group-id")];	                   
	                    performOperation(selectedFeature, group);
	                }
        	  });
        	  
        	  
        	 $("#groups-list").on("click", ".user-groups", function(event){				
				var group = groupsList[$(this).data("group-id")];			
				loadUsers(group);	      	  	   	  	
			});      	  
	      	  
	      }
	 });
}


function loadUsers(group){
	
	jQuery.ajax({
	      url: _MDM_SERVER_URI + "groups/" + group.id + "/users", 
	      type: "GET",
	      dataType: "json",
	      success: function(users) 
	      {
	      	
	       Handlebars.registerHelper("hasDevices", function(deviceCount, options) {
			    if(deviceCount > 0) {
				    return options.fn(this);
				} else {
				    return options.inverse(this);
				}
			   
			});				      	
	      	
	      	var modal = Handlebars.compile($("#hbs-modal-userList").html());
  			$("#modal-window").html(modal({group: group, users: users})).modal('show');	
  			
	      }				      
	});
	
}


function performOperation(feature, group){
	if(feature.template){
			var modal = Handlebars.compile($("#hbs-modal-featureTemplate").html());
  			$("#modal-window").html(modal({feature:feature, group:group})).modal('show');
	}else{
		
		jQuery.ajax({
		      url: _MDM_SERVER_URI + "/groups/" + group.id + "/operations/" + feature.name, 
		      type: "GET",
		      dataType: "json",
		      success: function(users) 
		      {		      	
		      
	  			
		      }				      
		});		
	}
}





