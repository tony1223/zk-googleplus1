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
			window.gapi.plusone.go(this.$n());
		}
	},
	_drawDataAttr:function(out,attr,val){
		out.push(' data-',attr,'="',val,'" ');
	},
	_drawDataAttrs:function(out){
		var wgt = this, datas = [
			"size",
			"href",
			"annotation",
			"width",
			"align",
			"expendTo"
		];
		jq.each(datas,function(id,attr){
			var val = wgt["_"+attr]; 
			if (val != null) {
				wgt._drawDataAttr(out, attr, val);
			}	
		});
		wgt._drawDataAttr(out,"callback","gplus1_"+this.uuid);
	},
	unbind_: function () {
		delete window["gplus1_"+this.uuid];
		this.$supers(zul.fiddle.plus1.Plus1,'unbind_', arguments);
	},
	getZclass: function () {
		return this._zclass != null ? this._zclass: "z-plus1";
	}
});
jq(function(){
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
});
