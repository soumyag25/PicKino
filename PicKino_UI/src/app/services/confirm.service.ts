import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Confirm } from "../models/confirm";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable()
export class confirmService {
  confirmURL = "http://localhost:7010/controller/confirm";
  constructor(private http: HttpClient) {}


  httpOptions = {
    headers: new HttpHeaders({
      
      "Content-Type": "application/json"
    })
  };

  getseats(): Observable<Confirm[]> {
    return this.http
      .get<Confirm[]>(this.confirmURL)
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
