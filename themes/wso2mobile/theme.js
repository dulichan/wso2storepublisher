var engine;

(function () {
	var con
    var template = function (request) {
        var hbs, file, page,
			absolute = application.get("absolute");
        return absolute.findView(request, "themes/wso2mobile");
    };
    engine = {
        render: function (data, meta) {
			var layout = data.layout;
			layout = Handle.compile(getResource("themes/wso2mobile/layouts/"+layout+"/"+logics.viewName]));
            print(layout({body:template(meta.request)(data)}));
        }
    };
}());