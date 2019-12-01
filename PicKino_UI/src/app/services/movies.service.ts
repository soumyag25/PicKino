import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movie } from "../models/movie";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable()
export class moviesService {
  moviesURL = "http://localhost:7010/controller/movies";
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      
      "Content-Type": "application/json"
    })
  };

  getmovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(this.moviesURL)
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
