package com.java.starrynight.controller;

import org.springframework.web.bind.annotation.RestController;

import com.java.starrynight.dto.Request.EventRequest;
import com.java.starrynight.dto.Response.BasicResponse;
import com.java.starrynight.model.Event;
import com.java.starrynight.service.EventService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;



@RestController
@RequestMapping("/starryni8/api/v1/events")
@RequiredArgsConstructor
public class EventController {

    private final EventService eventService;

    @PostMapping("/post")
    public ResponseEntity<?> postEvent(@RequestBody EventRequest eventRequest){
         BasicResponse<String> response = new BasicResponse<>();
        try{
            response = eventService.postEvent(eventRequest);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            response.setMessage("Something went wrong");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PatchMapping("/update")
    public ResponseEntity<?> updateEvent(@RequestBody EventRequest eventRequest){
        BasicResponse<Event> response = new BasicResponse<>();
        try {
            response = eventService.updateEvent(eventRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
            
        } catch (Exception e) {
            response.setMessage("something went wrong");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getEvents() {
        BasicResponse<Event> response = new BasicResponse<>();
        try {
            response = eventService.getEvents();
            return new ResponseEntity<>(response, HttpStatus.OK);
            
        } catch (Exception e) {
            response.setMessage("something went wrong");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteEvent(@RequestBody EventRequest eventRequest) {
        BasicResponse<String> response = new BasicResponse<>();
        try {
            response = eventService.deleteEvent(eventRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
            
        } catch (Exception e) {
            response.setMessage("something went wrong!!");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    
    
    
}
