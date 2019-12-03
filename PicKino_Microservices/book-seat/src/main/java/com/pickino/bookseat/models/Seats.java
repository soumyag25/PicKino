package com.pickino.bookseat.models;

public class Seats {

	public String userId;
	public String movieId;
	public String seatId;
	
//	public Seats(String movieId, String userId, String seatId)
//	{
//		this.movieId=movieId;
//		this.userId=userId;
//		this.seatId=seatId;
//	}
	
	public String getmovieId()
	{
		return movieId;
	}
	
	public void setmovieId(String movieId)
	{
		this.movieId = movieId;
	}
	public String getuserId()
	{
		return userId;
	}
	
	public void setuserId(String userId)
	{
		this.userId= userId;
	}
	public String getseatId()
	{
		return seatId;
	}
	
	public void setseatId(String seatId)
	{
		this.seatId= seatId;
	}
}
