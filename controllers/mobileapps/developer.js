list = function(caramel){		
	
	try{
		//var apps = JSON.parse(get(appController.getServiceURLs("appList", "")).data);
		var apps = JSON.parse(get("https://localhost:9443/publisher/config/dummy/applist.json").data);
	}catch(e){
		var apps = [];
	}
	
		
	caramel.render({
	   apps: apps
	});	
}