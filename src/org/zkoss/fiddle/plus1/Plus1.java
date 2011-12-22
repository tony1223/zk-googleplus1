package org.zkoss.fiddle.plus1;

import java.util.Map;

import org.zkoss.fiddle.plus1.event.LikeEvent;
import org.zkoss.lang.Objects;
import org.zkoss.zk.au.AuRequest;
import org.zkoss.zk.ui.event.Events;
import org.zkoss.zul.impl.XulElement;

public class Plus1 extends XulElement {

	static {
		addClientEvent(Plus1.class, LikeEvent.EVENT_NAME, CE_IMPORTANT);
	}

	private String _size;

	private String _href;

	private String _annotation;

	private String _width;

	private String _align;

	private String _expendTo;

	// super//
	protected void renderProperties(org.zkoss.zk.ui.sys.ContentRenderer renderer) throws java.io.IOException {
		super.renderProperties(renderer);

		render(renderer, "size", _size);
		render(renderer, "href", _href);
		render(renderer, "annotation", _annotation);
		render(renderer, "width", _width);
		render(renderer, "align", _align);
		render(renderer, "expendTo", _expendTo);

	}

	public void service(AuRequest request, boolean everError) {
		if (LikeEvent.EVENT_NAME.equals(request.getCommand())) {

			Map data = request.getData();
			
			String href = (String) data.get("href");
			boolean like = ((Boolean) data.get("like")).booleanValue();
			
			LikeEvent likevt = new LikeEvent(LikeEvent.EVENT_NAME, this, href, like);
			Events.postEvent(likevt);
		} else {
			super.service(request, everError);
		}

	}

	/**
	 * The default zclass is "z-plus1"
	 */
	public String getZclass() {
		return (this._zclass != null ? this._zclass : "z-plus1");

	}

	public String getSize() {
		return _size;
	}

	public void setSize(String size) {
		if (!Objects.equals(_size, size)) {
			_size = size;
			smartUpdate("size", _size);
		}
	}

	public String getHref() {
		return _href;
	}

	public void setHref(String href) {
		if (!Objects.equals(_href, href)) {
			_href = href;
			smartUpdate("href", _href);
		}
	}

	public String getAnnotation() {
		return _annotation;
	}

	public void setAnnotation(String annotation) {
		if (!Objects.equals(_annotation, annotation)) {
			_annotation = annotation;
			smartUpdate("annotation", _annotation);
		}
	}

	public String getWidth() {
		return _width;
	}

	public void setWidth(String width) {
		if (!Objects.equals(_width, width)) {
			_width = width;
			smartUpdate("width", _width);
		}
	}

	public String getAlign() {
		return _align;
	}

	public void setAlign(String align) {
		if (!Objects.equals(_align, align)) {
			_align = align;
			smartUpdate("align", _align);
		}
	}

	public String getExpendTo() {
		return _expendTo;
	}

	public void setExpendTo(String expendTo) {
		if (!Objects.equals(_expendTo, expendTo)) {
			_expendTo = expendTo;
			smartUpdate("expendTo", _expendTo);
		}
	}
}
