import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Movie } from "src/app/models/movie";
import { Seats } from "src/app/models/seats";
import { moviesService } from "src/app/services/movies.service";
import { seatsService } from "src/app/services/seats.service";
import { Pay } from "src/app/models/pay";
import { payService } from "src/app/services/pay.service";
import { ModalDirective } from "angular-bootstrap-md";
import { Router } from "@angular/router";
import { count } from "rxjs/operators";

@Component({
  selector: "app-seats",
  templateUrl: "./seats.component.html",
  styleUrls: ["./seats.component.scss"]
})
export class SeatsComponent implements OnInit {
  public id: string;
  @Input() seat: Seats;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seatsService: seatsService
  ) {}

  @ViewChild("LoginModal") LoginModal: ModalDirective;

  movies: Movie[];
  seatsArray: String[];
  bookedSeats: Seats[];
  pay: Pay[];
  r: number[];
  alphabets: string[];
  selectedMovie: Movie;
  selectedSeatsValue: string;
  count: number;
  displayValue: string;
  displayCost: string;
  totalCost: number;
  costPerSeat: number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("name");
    });
    this.count = 0;
    this.costPerSeat = 10;
    this.selectedSeatsValue = "";
    this.r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.alphabets = ["A", "B", "C", "D", "E"];
    this.seatsService.getBookedSeats().subscribe(res => {
      this.bookedSeats = res;
    });
  }

  recordSelectedSeats(a: string, number: number) {
    this.selectedSeatsValue = this.selectedSeatsValue
      .concat(a)
      .concat(number.toString())
      .concat(", ");

    this.displayValue =
      "The selected seats are " +
      this.selectedSeatsValue
        .trim()
        .substring(0, this.selectedSeatsValue.trim().length - 1);
    this.count = this.count + 1;
    this.totalCost = this.count * this.costPerSeat;
    this.displayCost =
      "Total cost would be " + this.totalCost.toString() + "\u20AC";
  }

  applyFormSeat() {
    this.router.navigate([
      "/pay",
      this.selectedSeatsValue
        .trim()
        .substring(0, this.selectedSeatsValue.trim().length - 1) +
        "&" +
        this.totalCost.toString() +
        "&" +
        this.id
    ]);
  }
}
