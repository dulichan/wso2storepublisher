
login = function(appController){	
	
	if(request.getMethod() == 'POST'){
		username = request.getParameter('username');
		password =  request.getParameter('password');
		
		var data = {'username': username, 'password': password};		
		
		var xhr = new XMLHttpRequest();
		xhr.open("POST", appController.getServiceURLs("getUserAuthenticate"));		
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(data);
		
		if(xhr.status == '200'){
			session.put("mdmConsoleUserLogin", "true");	
			var currentUser = JSON.parse(xhr.responseText);
			session.put("mdmConsoleUser", currentUser);
			if(currentUser){
				if(currentUser.category_id == 1){
					response.sendRedirect('dashboard');
				}else{
					response.sendRedirect(appController.appInfo().server_url + 'users/devices?user=' + currentUser.id);
				}
			}
			
			
		}
	}
		
	
	context = appController.context();
	context.title = context.title + " | Login";		
	context.data = {
		
	}
	return context;	
	
	
	
}



logout = function(appController){		
	session.put("mdmConsoleUserLogin", null);
	session.put("mdmConsoleUser", null);
	response.sendRedirect('login');
}
