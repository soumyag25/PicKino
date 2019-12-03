import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Seats } from "../models/seats";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable()
export class seatsService {
  seatsURL = "http://localhost:7010/controller/seats";
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      
      "Content-Type": "application/json"
    })
  };

  getSeatsCount(): Observable<Seats[]> {
    return this.http
      .get<Seats[]>(this.seatsURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  getBookedSeats(): Observable<Seats[]> {
    return this.http
      .get<Seats[]>(this.seatsURL + "/booked")
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
