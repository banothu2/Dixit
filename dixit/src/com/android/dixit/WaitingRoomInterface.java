package com.android.dixit;


import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.view.View;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;

import com.android.dixit.common.Player;
import com.android.dixit.common.Room;
import com.android.dixit.util.PlayerSession;

public class WaitingRoomInterface extends Activity {
	Handler socketHandler = null;
	private Room room;
	boolean isHost;
	List<Player> player_object_list; 
	ListView player_list;
	WaitingListAdapter player_list_adapter;
	
	private void startGame(){
		if(isHost){
			PlayerSession.getSingleton().startGame(room.roomId);
		}
	}
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		Intent intent = getIntent();
		socketHandler = new Handler(){ 
			@Override
			public void handleMessage(Message message){
				if(message.arg1 == PlayerSession.MESSAGE_ROOM_INFO){
					room = (Room) message.obj;
					if(room.creator.userId.equals(PlayerSession.getSingleton().currentPlayer.userId)){
						isHost = true;
					}
					else{
						isHost = false;
					} 
					if(isHost == true){
						((Button)findViewById(R.id.start_button)).setText("Start");
						findViewById(R.id.start_button).setOnClickListener(new View.OnClickListener() {
							@Override
							public void onClick(View v) {
								startGame();
							}
						});
					}	
					else{ 
						((Button)findViewById(R.id.start_button)).setText("Ready");
					}
					TextView room_number = (TextView) findViewById(R.id.room_number);
					//room_number.setText("Room Number: " + room.roomId);
					
					TextView creator_name = (TextView) findViewById(R.id.creator_name);
					if(room.creator.userId.equals(PlayerSession.getSingleton().currentPlayer.userId)){
						creator_name.setText("You are the creator!");	

					} else {
						creator_name.setText("The creator is  " + room.creator.userName);	
					}
					
					
					
					List<Player> players = (List<Player>) room.players;
					System.err.println(players.size());
					player_list_adapter.setValues(players);
					player_list_adapter.notifyDataSetChanged();
				}else if(message.arg1 == PlayerSession.MESSAGE_START_GAME){
					Intent intent = new Intent(WaitingRoomInterface.this,GameActivity.class);
					JSONObject object = (JSONObject) message.obj;
					try {
						if(object.getString("roomId").equals(room.roomId)){
							intent.putExtra("storyTeller", object.getString("storyteller"));
							intent.putExtra("roomId", room.roomId);
							startActivity(intent);
						}
					} catch (JSONException e) {
						e.printStackTrace();
					}
					
				}else if(message.arg1 == PlayerSession.MESSAGE_LEAVE){
					Intent intent = new Intent(WaitingRoomInterface.this,RoomInterface.class);
					startActivity(intent);
				}
			}
			
		};
		

		
		PlayerSession.getSingleton().setHandler(socketHandler);
		String roomId = intent.getStringExtra("roomId");
		PlayerSession.getSingleton().updateRoomInfo(roomId);
		
		setContentView(R.layout.activity_waiting_room_interface);
		
		
		
		player_list = (ListView) findViewById(R.id.player_list);
		player_list_adapter = new WaitingListAdapter(this, player_object_list);
		player_list.setAdapter(player_list_adapter);
		
	}

	
	
	public void finishActivity(View view) {
	     PlayerSession.getSingleton().leaveRoom(room.roomId);
	}
	
	
	
}
