import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institution } from '../models/institution';

@Injectable()
export class moviesService {

  instituionsURL = 'assets/test.json';
  constructor(private http: HttpClient) { }

  getmovies() {
    return this.http.get<Institution[]>(this.instituionsURL, {observe: 'response'});
  }
}
