package com.android.dixit.common;

import java.util.List;
import java.util.Vector;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.R.integer;


public class Room {
	public String roomId;
	public int status;
	public int currentPlayerNumber;
	public int maximumPlayerNumber;
	public Player creator;
	public List<Player> players = null;
	public Room(String rid,  int s,Player c,int cn,int mn){
		roomId = rid;
		creator = c;
		status = s;
		currentPlayerNumber = cn;
		maximumPlayerNumber = mn;
		players = new Vector<Player>();
	}
	
	public JSONObject toJson() throws JSONException{
		JSONObject object = new JSONObject();
		object.put("_id", roomId);
		object.put("status", status);
		if(creator != null)
			object.put("creator", creator.toJson().toString());
		object.put("currentPlayerNumber", currentPlayerNumber);
		object.put("maximumPlayerNumber", maximumPlayerNumber);
		return object;
	}
	public static Room fromJson(JSONObject object) throws JSONException{
		Room result = new Room(
				object.getString("_id"), 
				object.getInt("status"),
				Player.fromJson(object.getString("creator")), 
				object.getInt("currentPlayerNumber"), 
				object.getInt("maximumPlayerNumber"));
		JSONArray playerList = object.getJSONArray("playerList");
		for(int i = 0;i < playerList.length();i++){
			result.players.add(Player.fromJson(playerList.getJSONObject(i)));
		}
		return result;
		
	}
	public static Room fromJson(String str) throws JSONException{
		return fromJson(new JSONObject(str));
	}
}
