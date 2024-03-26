package com.java.starrynight.service;

import com.java.starrynight.dto.Request.EventRequest;
import com.java.starrynight.dto.Response.BasicResponse;
import com.java.starrynight.model.Event;

public interface EventService {

	BasicResponse<String> postEvent(EventRequest eventRequest);

    BasicResponse<Event> updateEvent(EventRequest eventRequest);

    BasicResponse<Event> getEvents();

    BasicResponse<String> deleteEvent(EventRequest eventRequest);

    


    
}
