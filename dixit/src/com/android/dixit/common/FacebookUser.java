package com.android.dixit.common;

import java.net.Inet4Address;

public class FacebookUser {
	private static final String AVATAR_URL_PREFIX = " https://graph.facebook.com/";
	private static final String AVATAR_URL_POSTFIX = "/picture?type=normal";
	public String name;
	public String avatar;
	public String facebookId;
	public FacebookUser(String id,String n,String a){
		facebookId = id;
		name = n;
		avatar = a;
	}
	public FacebookUser(String id,String n){
		facebookId = id;
		name = n;
		avatar = AVATAR_URL_PREFIX + facebookId + AVATAR_URL_POSTFIX;
	}
}
