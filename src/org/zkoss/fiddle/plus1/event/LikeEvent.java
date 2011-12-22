package org.zkoss.fiddle.plus1.event;

import org.zkoss.zk.ui.Component;
import org.zkoss.zk.ui.event.Event;


public class LikeEvent extends Event{

	private String href = null;
	private boolean like;
	public static final String EVENT_NAME ="onLike";
	
	public LikeEvent(String name, Component target, String href, boolean like) {
		super(name,target);
		this.href = href;
		this.like = like;
	}

	public LikeEvent(String name, Component target, Object data) {
		super(name, target, data);
	}

	public LikeEvent(String name, Component target) {
		super(name, target);
	}

	public LikeEvent(String name) {
		super(name);
	}
	
	public String getHref(){
		return href;
	}
	
	public void setHref(String href) {
		this.href = href;
	}

	
	public boolean isLike() {
		return like;
	}

	
	public void setLike(boolean like) {
		this.like = like;
	}
}
