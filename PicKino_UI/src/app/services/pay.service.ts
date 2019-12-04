import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Pay } from "../models/pay";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable()
export class payService {
  payURL = "http://localhost:7010/controller/pay";
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  public pay(
    movie: string,
    selectedSeats: string,
    totalCost: string
  ): Observable<string> {
    return this.http
      .get(this.payURL + "/" + movie + "/" + selectedSeats + "/" + totalCost, {
        responseType: "text"
      })
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
