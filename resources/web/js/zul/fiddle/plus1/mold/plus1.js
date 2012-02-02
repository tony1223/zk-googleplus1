function (out) {

	var zcls = this.getZclass(),
		uuid = this.uuid;

	out.push('<div ', this.domAttrs_(), '> ');

	out.push('<div id="',uuid,'-tmp" class="g-plusone" ');

	this._drawDataAttrs(out);
	
	out.push('></div></div>');

}