var render = function (theme, data, meta, require) {
    theme('default-layout', {
        app: data.app,
        
        header: [
                 {
                     partial: 'header'
                    
                 }
        ],
        
        body: [
                 {
                     partial: 'upload'
                    
                 }
        ] 
       
    });
};