new Log().info('Request received by the app default controller');


navigation = function(){
	return {appTitle: "WSO2Mobile Developer Console"};
}

index = function(){
	var user = require('/modules/user.js');
	if(user.current()==null || user.current() == undefined){
		response.sendRedirect('/publisher/login.jag');
		return;
	}
	response.sendRedirect('/publisher/console/list');
}