list = function(appController){
	return {
		layout:'1-column',
		title:'Your Apps',
		jsfile: 'console/list.js',
		partials:{
			header:appController.navigation()
		},
		data:{
			name:"Chan",
			quote:"I was a king I had a gold throne",
			apps:[
				{name:"Bookhub",status:"Published", price:"Free", totalInstalls:2034, rating:5}
			]
		}
	};
}

admin_list = function(appController){
	return {
		layout:'1-column',
		title:'Your Apps',
		jsfile: 'console/admin_list.js',
		partials:{
			header:appController.navigation()
		},
		data:{
			name:"Chan",
			quote:"I was a king I had a gold throne",
			apps:[
				{name:"Bookhub",status:"Published", price:"Free", totalInstalls:2034, rating:5}
			]
		}
	};
}



publish = function(appController){
	return {
		layout:'1-column',
		title:'Your Apps',
		jsfile: 'console/publish.js',
		partials:{
			header:appController.navigation()
		},
		data:{
			
		}
	};
}






manager = function(){
	//response.sendRedirect('/publisher/console/list');
	return {name:"Chan", quote:"I was a king I had a gold throne"};
}
upload = function(){
	return {name:"Chan", quote:"I was a king I had a gold throne"};
}