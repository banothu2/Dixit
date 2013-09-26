package com.android.dixit;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.widget.EditText;

import com.android.dixit.CreateRoomDialog.CreateRoomDialogListener;

public class TellStoryDialog extends DialogFragment{
	String storyInput;
	private GameActivity parentActivity;
    @Override
    public void onAttach(Activity activity) { 
        super.onAttach(activity);
        parentActivity = (GameActivity) activity;
    }
    
	
    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        // Get the layout inflater
        LayoutInflater inflater = getActivity().getLayoutInflater();
        
        // Inflate and set the layout for the dialog
        // Pass null as the parent view because its going in the dialog layout
        builder.setView(inflater.inflate(R.layout.dialog_tell_story, null));
        builder.setTitle("Tell a story");
        // Add action buttons
        builder.setPositiveButton("Create", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int id) {
            	//if(dialog == null)
            	storyInput = ((EditText)((Dialog) dialog).findViewById(R.id.storyEditText)).getText().toString();
            	dialog.dismiss();
            	parentActivity.tellStory(storyInput);
            }
        });
        builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
            	dialog.cancel();
            }
        });      
        return builder.create();
    }
}
