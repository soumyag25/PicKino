package com.pickino.payment.models;

public class Payment {
		
	private String seatId;
	private String movieId; 
	
	public Payment(String seatId, String movieId)
	{
		this.seatId=seatId;
		this.movieId=movieId;
		
	}
	
	public String getseatId()
	{
		return seatId;
	}
	
	public void setseatId(String seatId)
	{
		this.seatId= seatId;
	}
	
	public String getmovieId()
	{
		return movieId;
	}
	
	public void setmovieId(String movieId)
	{
		this.movieId = movieId;
	}
	
	
}
