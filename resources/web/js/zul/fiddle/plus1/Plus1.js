var fnRn=function(){
	this.rerender();
};
zul.fiddle.plus1.Plus1 = zk.$extends(zk.Widget, {
	//callback forward to onClick even.
	$define: {
		size:fnRn,
		href:fnRn,
		annotation:fnRn,
		width:fnRn,
		align:fnRn,
		expendTo:fnRn		
	},
	_initCallback:function (){
		var wgt = this;
		if (window["gplus1_"+this.uuid] == null) {
			window["gplus1_"+this.uuid] = function(response) {
				if (wgt.isListen('onLike')){
					wgt.fire('onLike', {
						href: response.href,
						like: (response.state == "on")
					});
				}
			};
		}
	},
	bind_: function () {
		this.$supers(zul.fiddle.plus1.Plus1,'bind_', arguments);
		this._initCallback();		
		if(window.gapi && window.gapi.plusone ){
			window.gapi.plusone.render(this.$n("tmp"),this._getDataMap());
		}
	},
	_drawDataAttr:function(out,attr,val){
		out.push(' data-',attr,'="',val,'" ');
	},
	_getDataMap:function(){
		var obj = {};
		this._iterdatas(
			function(attr,val){
				obj[attr] = val;
			}
		);
		return obj;
	},
	_iterdatas:function(fn){
		var wgt = this, datas = zul.fiddle.plus1.Plus1.ATTRS;
		jq.each(datas,function(id,attr){
			var val = wgt["_"+attr]; 
			if (val != null) {
				fn(attr, val);
			}	
		});
		fn("callback","gplus1_"+this.uuid);
	},
	_drawDataAttrs:function(out){
		var wgt = this;
		this._iterdatas(
			function(attr,val){
				wgt._drawDataAttr(out, attr, val);
			}
		);
	},
	unbind_: function () {
		delete window["gplus1_"+this.uuid];
		this.$supers(zul.fiddle.plus1.Plus1,'unbind_', arguments);
	},
	getZclass: function () {
		return this._zclass != null ? this._zclass: "z-plus1";
	}
},{
	ATTRS:[
		"size",
		"href",
		"annotation",
		"width",
		"align",
		"expendTo"
	]
});
jq(function(){
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
});
