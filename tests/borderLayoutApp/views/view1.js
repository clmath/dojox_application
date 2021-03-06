define(["dojo/dom", "dojo/_base/connect", "dijit/registry", "dojox/mvc/at"],
function(dom, connect, registry, at){
	var _connectResults = []; // events connect results
	var currentModel = null;

	var setRef = function (id, attr){
		var widget = registry.byId(id);
		widget.set("target", at("rel:", attr));
		console.log("setRef done.");
	};
	return {
		init: function(){
			console.log("In view1 init called");
		},

		beforeActivate: function(){
			console.log("In view1 beforeActivate called");
		},

		afterActivate: function(){
			console.log("In view1 afterActivate called");
		},

		beforeDeactivate: function(){
			console.log("In view1 beforeDeactivate called");
		},

		afterDeactivate: function(){
			console.log("In view1 afterDeactivate called");
		}
	}
});
