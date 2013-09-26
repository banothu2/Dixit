package com.android.dixit.util;

import android.content.Context;
import android.widget.Toast;

public class Notification {
	public static void notification(Context context, String text){
		Toast toast = Toast.makeText(context, text, Toast.LENGTH_SHORT);
		toast.show();
	}
}
