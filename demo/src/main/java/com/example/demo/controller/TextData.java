package com.example.demo.controller;

public class TextData {
	private String latitude;
	private String longitude;
	private String frp;
	private String confianca;
	
	public TextData(String lat, String longi, String frp, String conf)
	{
		this.latitude = lat;
		this.longitude = longi;
		this.frp = frp;
		this.confianca = conf;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getFrp() {
		return frp;
	}

	public void setFrp(String frp) {
		this.frp = frp;
	}

	public String getConfianca() {
		return confianca;
	}

	public void setConfianca(String confianca) {
		this.confianca = confianca;
	}
}
