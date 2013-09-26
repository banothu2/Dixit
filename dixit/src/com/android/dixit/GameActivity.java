package com.android.dixit;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.android.dixit.R;
import com.android.dixit.util.Notification;
import com.android.dixit.util.PlayerSession;

import android.R.integer;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnLongClickListener;
import android.view.View.OnTouchListener;
import android.view.ViewGroup;
import android.view.animation.AnimationUtils;
import android.widget.AdapterView;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Gallery;
import android.widget.ImageSwitcher;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.Gallery.LayoutParams;
import android.widget.ViewSwitcher.ViewFactory;

public class GameActivity extends Activity implements ViewFactory {
	private ImageSwitcher is;
	private Gallery gallery;
    private List<Integer> imgStoreList = new Vector<Integer>();//图像ID
    private TellStoryDialog tellStoryDialog = null;
    private Dialog chooseDialog = null;
    private EndGameDialog endGameDialog = null;
    
    private String roomId = null;
    private int currentImage;
    private int gameStage = 0;//0: waiting for story; 1: Waiting for everyone to choose; 2: Waiting for everyone to vote 
    private boolean isStoryTeller = false;
    private Handler mHandler = null;
    private String storyTellerId = null;
    private List<Integer> currentImages = new Vector<Integer>();//From 1 to 40
    
    public JSONArray gameResults;
    public void showGameResultDialog(){
    	endGameDialog.show(getFragmentManager(), "EndGameDialog");
    	//((BaseAdapter)endGameDialog.resultView.getAdapter()).notifyDataSetChanged();
    }
    
    public void returnToPrepareStage(){
    	Intent intent = new Intent(this, WaitingRoomInterface.class);
    	intent.putExtra("roomId", roomId);
    	startActivity(intent);
    }
    public void startNewGame(){
    	PlayerSession.getSingleton().startGame(roomId);
    }
    public void showTellStoryDialog(){
    	if(isStoryTeller)
    		tellStoryDialog.show(getFragmentManager(), "TellStoryDialog");
    }
    private void showChooseDialog(){
    	AlertDialog.Builder builder = new AlertDialog.Builder(this);
		builder.setMessage("Pick this?")
	        .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
	            public void onClick(DialogInterface dialog, int id) {
	            	currentImage = (Integer)gallery.getSelectedItem();
	            	if(isStoryTeller){
	            		showTellStoryDialog();
	            	}
	            	else
	            		PlayerSession.getSingleton().choosePicture(roomId,currentImages.get(currentImage) + "");
	            }
	        })
	        .setNegativeButton("no", new DialogInterface.OnClickListener() {
	            public void onClick(DialogInterface dialog, int id) {
	                
	            }
	        });
		chooseDialog = builder.create();
		chooseDialog.show();
    }
    
    private void showResult(String result){
    	System.out.println("GET RESULT");
    }
    
    private void showVoteDialog(){
    	AlertDialog.Builder builder = new AlertDialog.Builder(this);
		builder.setMessage("Vote for this?")
        .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
            	currentImage = (Integer)gallery.getSelectedItem();
                PlayerSession.getSingleton().vote(roomId,currentImages.get(currentImage));
            }
        })
        .setNegativeButton("no", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                
            }
        });
		chooseDialog = builder.create();
		chooseDialog.show();
    }
    private void switchGameStage(int stage){
    	if(gameStage == stage)
    		return;
    	gameStage = stage;
    	if(gameStage == 0){
    		showTellStoryDialog();
    	}else if(gameStage == 1){
    		
    	}else if(gameStage == 2){
    		
    	}
    }
    private void updateCurrentImages(){
    	gallery.setAdapter(new ImageAdapter(this));
    }
    private void showStory(String story){
    	if(story == null){
    		story = "No story now";
    	}
    	((TextView)this.findViewById(R.id.storyTextView)).setText(story);
    }
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_game);
		mHandler = new Handler(){
			@Override
			public void handleMessage(Message message){
				switch (message.arg1) {
					case PlayerSession.MESSAGE_START_GAME:
						JSONObject object = (JSONObject) message.obj;
						try {
							if(roomId.equals(object.getString("roomId"))){
								endGameDialog.dismiss();
								gameStage = 0;
								storyTellerId = object.getString("storyteller");
								PlayerSession.getSingleton().getCards(roomId);
								if(PlayerSession.getSingleton().currentPlayer.userId.equals(storyTellerId)){
									isStoryTeller = true;
									
								}else{
									isStoryTeller = false;
								}
								showStory("");
								
								if(isStoryTeller)
									Notification.notification(getApplicationContext(), "You are the story teller");
							
							}
						} catch (JSONException e) {
							e.printStackTrace();
						}
						
						break;
					case PlayerSession.MESSAGE_CARDS:
						currentImages = ((List<Integer>) message.obj);
						updateCurrentImages();
						break;
					case PlayerSession.MESSAGE_TO_TELL_STORY:
						gameStage = 0;
						showTellStoryDialog();
						Notification.notification(getApplicationContext(), "Choose one and tell the story");
						break;
					case PlayerSession.MESSAGE_TO_CHOOSE:
						gameStage = 1;
						showStory((String) message.obj);
						Notification.notification(getApplicationContext(), "Players start to choose");
						break; 
					case PlayerSession.MESSAGE_TO_VOTE:
						gameStage = 2; 
						currentImages = ((List<Integer>) message.obj);
						updateCurrentImages();
						Notification.notification(getApplicationContext(), "Voting!");
						break;
					case PlayerSession.MESSAGE_RESULT:
						gameResults = (JSONArray) message.obj;
						showGameResultDialog();
						break;
					case PlayerSession.MESSAGE_LEAVE:
						Intent intent = new Intent(GameActivity.this,RoomInterface.class);
						startActivity(intent);
						break;
					default:
						break;
				}
			}
		};
		PlayerSession.getSingleton().setHandler(mHandler);
		
		this.storyTellerId = getIntent().getExtras().getString("storyTeller");
		roomId = getIntent().getExtras().getString("roomId");
		if(PlayerSession.getSingleton().currentPlayer.userId.equals(storyTellerId)){
			isStoryTeller = true;
		}else{
			isStoryTeller = false;
		}
		
    	Field[] fields = R.drawable.class.getDeclaredFields();
    	for(int i = 0; i < 41; i++){
            int numberOne = i;
            try {
                        numberOne = fields[i].getInt(R.drawable.aaimg001);
                } catch (IllegalArgumentException e) {
                        e.printStackTrace();
                } catch (IllegalAccessException e) {
                        e.printStackTrace();
                } 
            imgStoreList.add(numberOne);
    	}
    	System.out.println(imgStoreList.size());
    	
		is = (ImageSwitcher) findViewById(R.id.switcher);
		is.setFactory(this);
		is.setInAnimation(AnimationUtils.loadAnimation(this,
				android.R.anim.fade_in));
		is.setOutAnimation(AnimationUtils.loadAnimation(this,
				android.R.anim.fade_out));
		
		is.setOnLongClickListener(new OnLongClickListener() {		
			@Override
			public boolean onLongClick(View v) {
				System.out.println(gameStage);
				if(gameStage == 0){
					if(isStoryTeller){
						showChooseDialog();
					}
				}
				else if(gameStage == 1){
					if(!isStoryTeller)
						showChooseDialog();
				}else if(gameStage == 2){
					if(!isStoryTeller)
						showVoteDialog();
				}else {
					return false;
				}
				return true;
			}
		});
		gallery = (Gallery) findViewById(R.id.gallery);
		gallery.setAdapter(new ImageAdapter(this));
		gallery.setOnItemSelectedListener(new OnItemSelectedListener(){
			@Override
			public void onItemSelected(AdapterView<?> arg0, View arg1,
					int position, long arg3) {
				is.setImageResource(mapImageID(currentImages.get(position)));
			}
			@Override
			public void onNothingSelected(AdapterView<?> arg0) {
				
			}
			
		});
		
		tellStoryDialog = new TellStoryDialog();
		endGameDialog = new EndGameDialog();
		PlayerSession.getSingleton().getCards(roomId);
		if(isStoryTeller)
			Notification.notification(getApplicationContext(), "You are the story teller");
	}
	//设置ImgaeSwitcher
	@Override
	public View makeView() {
		ImageView i = new ImageView(this);
		i.setBackgroundColor(0xFF000000);
		i.setScaleType(ImageView.ScaleType.CENTER);//居中
		i.setLayoutParams(new ImageSwitcher.LayoutParams(//自适应图片大小
				LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT));
		return i;
	}
	public class ImageAdapter extends BaseAdapter {
		public ImageAdapter(Context c) {
			mContext = c;
		}
		public int getCount() {
			return currentImages.size();
		}
		public Object getItem(int position) {
			return position;
		}
		public long getItemId(int position) {
			return position;
		}
		public View getView(int position, View convertView, ViewGroup parent) {
			ImageView i = new ImageView(mContext);
			i.setImageResource(mapImageID(currentImages.get(position)));
			i.setAdjustViewBounds(true);
			i.setLayoutParams(new Gallery.LayoutParams(
					LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
			return i;
		}
		private Context mContext;
	}
	public void tellStory(String story) {
		PlayerSession.getSingleton().tellStory(roomId,currentImages.get(currentImage) + "",story);
	}
	
	private int mapImageID(int i){
		return imgStoreList.get(i);
	}

}
