import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from "src/app/models/movie";
import { Seats } from "src/app/models/seats";
import { moviesService } from "src/app/services/movies.service";
import { seatsService } from "src/app/services/seats.service";
import { Pay } from "src/app/models/pay";
import { payService } from "src/app/services/pay.service";
import { ModalDirective } from "angular-bootstrap-md";
import { Router } from "@angular/router";
import { count } from 'rxjs/operators';



@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {
  public id: string;
  @Input() seat: Seats;
  constructor(private route: ActivatedRoute,  private router: Router, private seatsService: seatsService ) { }
  
  @ViewChild("LoginModal") LoginModal: ModalDirective;

  movies: Movie[];
  seatsArray: String[];
  bookedSeats: Seats[];
  pay: Pay[];
 // seat: Seats;
  r: number[];
  alphabets: string[]; 
  selectedSeat: Seats;
  selectedMovie: Movie;
  labelValue: string;
  count: number;

  ngOnInit() {
   this.route.paramMap.subscribe(
     params => {
       this.id = params.get('id');
     }
   )
   this.count =0;
     this.labelValue = "";
   this.r = [1,2,3,4,5,6,7,8,9,10];
   this.alphabets = ["A","B","C","D","E"];
   this.seatsService.getBookedSeats().subscribe(res=>{this.bookedSeats=res;});
}

changeLabelName(a:string, number:number) {
  this.labelValue = this.labelValue.concat(a).concat(number.toString()).concat(", ");
  
}  


applyFormSeat() {
    this.router.navigate(['pay']);
}
}
