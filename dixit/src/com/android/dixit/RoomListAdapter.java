package com.android.dixit;


import java.util.List;

import com.android.dixit.common.Room;
import com.android.dixit.util.PlayerSession;
/*
import com.example.room_interface.R;
import com.parse.ParseObject;
 */
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.TextView;
import android.content.Context;

public class RoomListAdapter extends BaseAdapter {

	private final RoomInterface context;
	private List<Room> room_list;
	int selectedIndex = -1;
	
	public RoomListAdapter(RoomInterface context, List<Room> object_list) {
		this.context = context;
		room_list = object_list;
	}

	public void setValues(List<Room> object_list){
		room_list = object_list;
	}
	
	@Override
	public int getCount() {
		if(room_list!=null)
			return room_list.size();
		else 
			return 0;
	}

	@Override
	public Object getItem(int position) {
		return room_list.get(position);
	}

	@Override
	public long getItemId(int position) {
		return 0;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		if(convertView == null){
			LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
			convertView = inflater.inflate(R.layout.room_list, null);
		}
		 
		TextView room_no = (TextView) convertView.findViewById(R.id.room_no);
		TextView player_button = (TextView) convertView.findViewById(R.id.player_count);
		//Button player_button = (Button) convertView.findViewById(R.id.player_button);
		Button join_button = (Button) convertView.findViewById(R.id.join_button);
		
		
		//room_no.setText("#"+room_list.get(position).roomId);
		room_no.setText("Room Number: " + position);
		
		player_button.setText(room_list.get(position).players.size()+"/"+room_list.get(position).maximumPlayerNumber);
		join_button.setText("join");
		selectedIndex = position;
		join_button.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				PlayerSession.getSingleton().joinRoom(room_list.get(selectedIndex).roomId);
			}
		});
		
		return convertView;
	}

	
}
