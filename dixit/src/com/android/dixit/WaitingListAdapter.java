package com.android.dixit;

import java.io.InputStream;
import java.net.URL;
import java.util.List;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.android.dixit.common.Player;


public class WaitingListAdapter extends BaseAdapter {

	
	private final WaitingRoomInterface context;
	private List<Player> player_list;
	//int selectedIndex = -1;
	
	public WaitingListAdapter(WaitingRoomInterface context, List<Player> object_list) {
		this.context = context;
		player_list = object_list;
	}

	public void setValues(List<Player> object_list){
		player_list = object_list;
	}
	
	@Override
	public int getCount() {
		
		if(player_list != null){
			return player_list.size(); 
			}
		else{
			//System.err.println("Error=====null=========s" + player_list.get(position).);
			return 0;
		}
	} 

	@Override
	public Object getItem(int position) {
		return player_list.get(position);
	}

	@Override
	public long getItemId(int position) {
		return 0;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		if(convertView == null){
			LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
			convertView = inflater.inflate(R.layout.player_list, null);
		}


		TextView playerName = (TextView) convertView.findViewById(R.id.player_name);
		TextView playerInfo = (TextView) convertView.findViewById(R.id.player_info);
		ImageView playerProfile = (ImageView) convertView.findViewById(R.id.player_profile);

		//playerProfile.setBackgroundResource(player_list.get(position).avatarUrl);
		
		//TextView creator_name_import = (TextView) convertView.findViewById(R.id.creator_name);
		//String creatorName = (String) creator_name_import.getText();
		
		//if(player_list.get(position).userName == creatorName){
		//	playerName.setText(player_list.get(position).userName + "creator");
  
	//	} else {
			playerName.setText(player_list.get(position).userName);

//		}
		
		//System.err.println(player_list.get(position).credits);
		String playerScore = ""+player_list.get(position).credits;
		playerInfo.setText("Player Score: " + playerScore);
		 
		return convertView;
	}

}

