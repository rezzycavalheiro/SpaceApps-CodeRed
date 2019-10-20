package com.example.demo.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/teste")
public class DemoController {
	
	@CrossOrigin
	@GetMapping(path = "/getHello")
	public ArrayList<TextData> sendHello(){
		return this.readText();
	}
	
	/*@CrossOrigin
	@PostMapping(consumes = "application/json")
	public String create(@RequestBody Pedido pedido){
		return repository.save(pedido);
	}*/
	
	private ArrayList<TextData> readText()
	{
		ArrayList<TextData> td =  new ArrayList<TextData>();
		String[] val;
		try {
					
			URL url = new URL("http://viirsfire.geog.umd.edu/web_data/GLOBAL/NOAA/20191018_NOAA.txt");
			
			// read text returned by server
		    BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
		    
		    String line;
		    while ((line = in.readLine()) != null) {
		    	if(!line.startsWith("Year")) {
		    		val = line.split(",");
			    	td.add(new TextData(val[4], val[5], val[6], val[7]));
		    	}	
		    }
		    in.close();
		    return td;
		}catch (MalformedURLException e) {
			System.out.println("Malformed URL: " + e.getMessage());
		}catch (IOException e) {
			System.out.println("I/O Error: " + e.getMessage());
		}
		
		return null;
	}
	

}
