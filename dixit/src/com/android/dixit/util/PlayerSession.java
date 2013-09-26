package com.android.dixit.util;

import java.net.MalformedURLException;
import java.util.List;
import java.util.Vector;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.HttpPost;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.android.dixit.common.FacebookUser;
import com.android.dixit.common.Player;
import com.android.dixit.common.Room;

import android.R.array;
import android.R.integer;
import android.app.LauncherActivity.ListItem;
import android.os.Handler;
import android.os.Message;

import io.socket.IOAcknowledge;
import io.socket.IOCallback;
import io.socket.SocketIO;
import io.socket.SocketIOException;

public class PlayerSession {
	
	protected static PlayerSession SINGLETON = null;
	public static PlayerSession getSingleton(){
		if(SINGLETON == null){
			SocketIO socketIO;
			try { 
				socketIO = new SocketIO("http://147.8.6.13:3000");
				SINGLETON = new PlayerSession(socketIO);
			} catch (MalformedURLException e) {
				e.printStackTrace(); 
			}
		}
		return SINGLETON;  
	}
	public static String EVENT_ROOMS = "rooms";
	public static String EVENT_ROOM = "room";
	public static String EVENT_LOGIN = "login";
	/**   
	 * To server it means cloosing
	 * To client it means start to choose
	 */
	public static String EVENT_CHOOSE_PICTURE = "choose";
	/**
	 * To server, this means the story is told be story teller
	 * To client, this means the story teller has told a story and the game 
	 * enter the next step
	 */
	public static String EVENT_TELL_STORY = "tell";
	/**
	 * To server, it means voting,
	 * To client, it means you should start to vote
	 */
	public static String EVENT_VOTE = "vote";
	public static String EVENT_JOIN_ROOM = "join";
	public static String EVENT_CREATE_ROOM = "create_room";
	public static String EVENT_LEAVE_ROOM = "leave";
	public static String EVENT_START_GAME = "start";
	public static String EVENT_CARDS = "cards";
	public static String EVENT_RESULT = "result";
	
	public static final int MESSAGE_LOGON_SUCCESS = 0x1;
	public static final int MESSAGE_CREATE_ROOM = 0x2;
	public static final int MESSAGE_JOIN_ROOM = 0x4;
	public static final int MESSAGE_ROOM_LIST = 0x8;
	public static final int MESSAGE_TO_TELL_STORY = 0x9;
	public static final int MESSAGE_START_GAME = 0xa;
	public static final int MESSAGE_CARDS = 0xb;
	public static final int MESSAGE_TO_CHOOSE = 0x10;
	public static final int MESSAGE_TO_VOTE = 0x11;
	public static final int MESSAGE_ROOM_INFO = 0x12;
	public static final int MESSAGE_RESULT = 0x14;
	public static final int MESSAGE_LEAVE = 0x15;
	
	private Handler mHandler = null;
	private SocketIO socketIO;
	public Player currentPlayer = null;
	private IOCallback callbackFunction;
	
	private PlayerSession(SocketIO socket){
		socketIO = socket;
		callbackFunction = new IOCallback() {
			@Override
			public void onMessage(JSONObject json, IOAcknowledge ack) {
				
			}
			@Override
			public void onMessage(String data, IOAcknowledge ack) {
				data = data.toLowerCase();
			}
			@Override
			public void onError(SocketIOException socketIOException) {
				System.err.println("ERROR OF SOCKETIO================!!!!!!!!!!!!!!!");
			}
			@Override
			public void onDisconnect() {
				
			}
			
			@Override
			public void onConnect() {
				// TODO Auto-generated method stub
			}
			
			@Override
			public void on(String event, IOAcknowledge ack, Object... args) {
				if(mHandler == null){
					System.out.println("Handler is NULL");
					return;
				}
				try {
					event = event.toLowerCase();
					if(event.equals(EVENT_ROOMS)){
						if(args.length > 0){
							try {
								JSONArray array = new JSONArray((args[0]).toString());
								List<Room> rooms = new Vector<Room>();
								for (int i = 0; i < array.length(); i++) {
									rooms.add(Room.fromJson(array.getJSONObject(i)));
								}
								Message message = new Message();
								message.arg1 = MESSAGE_ROOM_LIST;
								message.obj = rooms;
								mHandler.sendMessage(message);
							} catch (Exception e) {
								System.out.println("Error");
								e.printStackTrace();
							} 
						}else{
							System.out.println("No rooms");
						}
					}else if(event.equals(EVENT_ROOM) || event.equals(EVENT_CREATE_ROOM) || event.equals(EVENT_JOIN_ROOM)){
						JSONObject room = (JSONObject) args[0];
						try {
							Room currentRoom = Room.fromJson(room);
							Message message = new Message();
							if(event.equals(EVENT_JOIN_ROOM) || event.equals(EVENT_CREATE_ROOM))
								message.arg1 = MESSAGE_JOIN_ROOM;
							else
								message.arg1 = MESSAGE_ROOM_INFO;
							message.obj = currentRoom;
							mHandler.sendMessage(message);
						} catch (JSONException e) {
							e.printStackTrace();
						}
					}else if(event.equals(EVENT_START_GAME)){
						Message msg = new Message();
						msg.arg1 = MESSAGE_START_GAME;
						msg.obj = args[0];
						mHandler.sendMessage(msg);
					}else if(event.equals(EVENT_CARDS)){	
						Message message = new Message();
						message.arg1 = MESSAGE_CARDS;
						JSONArray array = (JSONArray) args[0];
						List<Integer> cardIDs = new Vector<Integer>();
						for(int i = 0;i < array.length();i++){
							cardIDs.add(array.getInt(i));
						}
						message.obj = cardIDs;
						mHandler.sendMessage(message);
					}
					else if(event.equals(EVENT_TELL_STORY)){
						Message message = new Message();
						message.arg1 = MESSAGE_TO_TELL_STORY;
						mHandler.sendMessage(message);
					}else if(event.equals(EVENT_CHOOSE_PICTURE)){
						Message message = new Message();
						message.arg1 = MESSAGE_TO_CHOOSE;
						message.obj = args[0];
						mHandler.sendMessage(message);
					}else if(event.equals(EVENT_TELL_STORY)){
						Message message = new Message();
						message.arg1 = MESSAGE_TO_TELL_STORY;
						mHandler.sendMessage(message);
					}else if(event.equals(EVENT_VOTE)){
						Message message = new Message();
						message.arg1 = MESSAGE_TO_VOTE;
						JSONArray array = (JSONArray) args[0];
						List<Integer> cardIDs = new Vector<Integer>();
						for(int i = 0;i < array.length();i++){
							cardIDs.add(array.getInt(i));
						}
						message.obj = cardIDs;
						mHandler.sendMessage(message);
					}else if(event.equals(EVENT_LOGIN)){
						try {
							Player player = Player.fromJson((JSONObject) args[0]);
							PlayerSession.getSingleton().currentPlayer = player;
							Message message = new Message();
							message.arg1 = PlayerSession.MESSAGE_LOGON_SUCCESS;
							message.obj = player;
							mHandler.sendMessage(message);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}else if(event.equals(EVENT_RESULT)){
						Message message = new Message();
						message.arg1 = PlayerSession.MESSAGE_RESULT;
						message.obj = args[0];
						System.out.println(message.obj);
						mHandler.sendMessage(message);
					}else if(event.equals(EVENT_LEAVE_ROOM)){
						Message message = new Message();
						message.arg1 = PlayerSession.MESSAGE_LEAVE;
						mHandler.sendMessage(message);
					}
					else{
						
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		};
		socket.connect(callbackFunction);
	}
	
	public void setHandler(Handler h){
		mHandler = h;
	}
	
	public void facebookLogIn(FacebookUser user){
		try {
			JSONObject object = new JSONObject();
			object.put("name",user.name);
			object.put("id", user.facebookId);
			object.put("avatar", user.avatar);
			
			socketIO.emit("login", object.toString());
		} catch (JSONException e) {
			e.printStackTrace();
		}catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void connect(){
		socketIO.connect(callbackFunction);
	}
	
	protected void emit(String event, Object... args) {
		socketIO.emit(event, args);
	}
	public void getCards(String roomId){
		this.emit(EVENT_CARDS,roomId);
	}
	public void createRoom(Room room){
		try {
			this.emit(EVENT_CREATE_ROOM,room.toJson().toString());
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
	
	public void joinRoom(String roomId){
		this.emit(EVENT_JOIN_ROOM, roomId);
	}
	
	public void startGame(String roomId){
		this.emit(EVENT_START_GAME,roomId);
	}
	public void updateRoomList(){
		this.emit(EVENT_ROOMS);
	}
	public void updateRoomInfo(String roomId){
		this.emit(EVENT_ROOM, roomId);
	}
	public void choosePicture(String roomId,String picID){
		System.out.println("picID=====================" + picID);
		
		this.emit(EVENT_CHOOSE_PICTURE, roomId, picID);
	}
	public void tellStory(String roomId,String cardId,String story){
		System.out.println("StoryCardId===============" + cardId);
		this.emit(EVENT_TELL_STORY, roomId, cardId, story);
	}
	public void vote(String roomId,int picID){
		this.emit(EVENT_VOTE, roomId,picID);
	}
	public void leaveRoom(String roomId){
		this.emit(EVENT_LEAVE_ROOM, roomId);
	}
}
