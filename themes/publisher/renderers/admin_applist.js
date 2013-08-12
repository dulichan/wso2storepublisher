var render = function (theme, data, meta, require) {
	
	
    theme('default-layout', {      
        header: [
                 {
                     partial: 'header'
                    
                 }
        ],
        
        body: [
                 {
                     partial: 'applist',
                     context: data.apps
                 }
        ]
    });
};