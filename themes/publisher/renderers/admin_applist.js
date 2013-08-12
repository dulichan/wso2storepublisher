var render = function (theme, data, meta, require) {
	
	
    theme('default-layout', {      
        header: [
                 {
                     partial: 'header'
                    
                 }
        ],
        
        body: [
                 {
                     partial: 'admin_applist',
                     context: data.apps
                 }
        ]
    });
};