package com.android.dixit;

import java.lang.reflect.Array;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.content.DialogInterface;
import android.database.DataSetObserver;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.TextView;

public class EndGameDialog extends DialogFragment{
	
	String storyInput;
	private GameActivity parentActivity;
    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);
        parentActivity = (GameActivity) activity;
    }
    ListView resultView;
	@Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        // Use the Builder class for convenient dialog construction
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        
        
        LayoutInflater inflater = getActivity().getLayoutInflater();
        
        //builder.setView(inflater.inflate(R.layout.dialog_scores_room, null)); 
        
        View view = inflater.inflate(R.layout.dialog_scores_room, null);
        // add items
        //results.get("name");
        
        
        resultView = (ListView) view.findViewById(R.id.scores_list);
        resultView.setAdapter(new BaseAdapter() {
			@Override
			public View getView(int position, View convertView, ViewGroup parent) {
				LayoutInflater inflater = getActivity().getLayoutInflater();
				View view = inflater.inflate(R.layout.player_list, null);
				try {
					((TextView)view.findViewById(R.id.player_name)).setText(
							((JSONObject)this.getItem(position)).getString("name"));
					((TextView)view.findViewById(R.id.player_info)).setText("Player score: " + 
							((JSONObject)this.getItem(position)).getString("score"));
				} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return view;
			}
			
			@Override
			public long getItemId(int position) {
				return 0;
			}
			
			@Override
			public Object getItem(int position) {
				try {
					return parentActivity.gameResults.getJSONObject(position);
				} catch (JSONException e) {
					e.printStackTrace();
					return null;
				}
			}
			
			@Override
			public int getCount() {
				return parentActivity.gameResults.length();
			}
		});
        
        builder.setTitle("Game Results!");
        builder.setView(view);
        builder.setPositiveButton("New Game", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int id) {
            	dialog.dismiss();
            	//parentActivity.returnToPrepareStage();
            	parentActivity.startNewGame();
            }
        });
        builder.setNegativeButton("Leave Room", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
            	dialog.cancel();
            	parentActivity.returnToPrepareStage();
            }
        });      
        
        // Create the AlertDialog object and return it
        return builder.create();
    }	
}


