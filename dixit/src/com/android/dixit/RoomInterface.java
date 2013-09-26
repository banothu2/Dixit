package com.android.dixit;



import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.view.View;
import android.widget.ListView;

import com.android.dixit.common.Room;
import com.android.dixit.util.PlayerSession;
/*
import com.parse.FindCallback;
import com.parse.Parse;
import com.parse.ParseObject;
import com.parse.ParseQuery;
import com.parse.ParseException;
*/
public class RoomInterface extends Activity implements SearchRoomDialog.SearchRoomDialogListener, 
											CreateRoomDialog.CreateRoomDialogListener{

	//personal information
	String user_id = "2";
	
	//room information
	List<Room> room_object_list;
	ListView room_list;
	RoomListAdapter room_list_adapter;
	SearchRoomDialog search_dialog;
	CreateRoomDialog create_dialog;
	Handler mSocketCallbackHandler;
	//ParseQuery query;
	
	public void enterRoom(String roomId){
		System.out.println("Entering room===============");
		Intent intent = new Intent(this,WaitingRoomInterface.class);
		intent.putExtra("roomId", roomId);
		startActivity(intent);
	}
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		mSocketCallbackHandler = new Handler(){
			@Override
			public void handleMessage(Message message){ 
				if(message.arg1 == PlayerSession.MESSAGE_CREATE_ROOM 
						|| message.arg1 == PlayerSession.MESSAGE_JOIN_ROOM
						|| message.arg1 == PlayerSession.MESSAGE_ROOM_INFO){
					String roomId = ((Room)message.obj).roomId;
					RoomInterface.this.enterRoom(roomId);	
				}else if(message.arg1 == PlayerSession.MESSAGE_ROOM_LIST){
					System.err.println("ROOM_LIST================");
					List<Room> rooms = (List<Room>) message.obj;
					room_list_adapter.setValues(rooms);
					room_list_adapter.notifyDataSetChanged();
				}else{
					//DO NOTHING
					System.err.println("ERROR MESSAGE==========");
				}
			}
		};
		PlayerSession.getSingleton().setHandler(mSocketCallbackHandler);
		//Parse.initialize(this, "3UjZd5rU4etcJOyOFDWlNkKcLiMjDrt4yCTOAZbH", "TaOPZE6mc17sMGux0lDQFy8is5zs5iV6CYkZaRHV"); 
		setContentView(R.layout.activity_room_interface);
		search_dialog = new SearchRoomDialog();
		create_dialog = new CreateRoomDialog();

		room_list = (ListView) findViewById(R.id.room_list);
		room_list_adapter = new RoomListAdapter(this, room_object_list);
		room_list.setAdapter(room_list_adapter);
		
		
		this.findViewById(R.id.create_button).setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				RoomInterface.this.createRoom();
			}
		});
		this.findViewById(R.id.refresh_button).setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				RoomInterface.this.refreshRoom();
			}
		});
		this.refreshRoom();
	}

	
	public void finishActivity(View view) {
	     finish();
	}
	
	public void searchRoom(View view) {
	     search_dialog.show(getFragmentManager(), "SearchRoomDialog");
	}
	public void onDialogPositiveClick(SearchRoomDialog dialog) {
		/*
		query = new ParseQuery("Room");
		query.whereEqualTo("IsRunning", false);
		query.whereEqualTo("Room_ID", search_dialog.search_input);
		query.findInBackground(new FindCallback() {
		    public void done(List<ParseObject> roomList, ParseException e) {
		        if (e == null) {
		        	room_object_list = roomList;
		        	room_list_adapter.setValues(room_object_list);
		    		room_list_adapter.notifyDataSetChanged();
		        } else {
		        }
		    }
		});*/
    }
	
	
	public void refreshRoom() {
		PlayerSession session = PlayerSession.getSingleton();
		session.updateRoomList();
		/*
		query = new ParseQuery("Room");
		query.whereEqualTo("IsRunning", false);
		query.findInBackground(new FindCallback() {
		    public void done(List<ParseObject> roomList, ParseException e) {
		        if (e == null) {
		        	room_object_list = roomList;
		        	room_list_adapter.setValues(room_object_list);
		    		room_list_adapter.notifyDataSetChanged();
		        } else {
		        }
		    }
		});*/
	 }
	
	public void createRoom() { 
		
		create_dialog.show(getFragmentManager(), "CreateRoomDialog");
	 }
	
	public void onDialogPositiveClick(CreateRoomDialog dialog) {
		PlayerSession session = PlayerSession.getSingleton();
		Room room = new Room("", 0, null, 0, Integer.parseInt(dialog.create_input));
		session.createRoom(room);
	}
}
