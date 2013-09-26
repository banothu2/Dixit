package com.android.dixit.common;

import java.util.jar.Attributes.Name;

import org.json.JSONException;
import org.json.JSONObject;

public class Player{
	public String userName;
	public String avatarUrl;
	public String userId;
	public int credits;
	public Player(String u,String a,String uid,int c){
		userName = u;
		avatarUrl = a;
		userId = uid;
		credits = c;
	}
	
	public JSONObject toJson() throws JSONException{
		JSONObject object = new JSONObject();
		object.put("name", userName);
		object.put("avatar", avatarUrl);
		object.put("id", userId);
		object.put("credits", credits);
		return object;
	}
	public static Player fromJson(JSONObject object) throws JSONException{
		return new Player(
				object.getString("name"), 
				object.getString("avatar"), 
				object.getString("_id"), 
				object.getInt("credits"));
	}
	public static Player fromJson(String str) throws JSONException{
		return fromJson(new JSONObject(str));
	}
}
