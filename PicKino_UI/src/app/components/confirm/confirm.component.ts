import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Seats } from "src/app/models/seats";
import { seatsService } from "src/app/services/seats.service";
import { Router } from "@angular/router";
import { Confirm } from "src/app/models/confirm";
import { payService } from "src/app/services/pay.service";

@Component({
  selector: "app-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.scss"]
})
export class ConfirmComponent implements OnInit {
  constructor(
    private payService: payService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  input: string;
  selectedSeats: string;
  bookingId: string;
  movie: string;
  cost: string;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.input = params.get("details");
    });
    var arrInput = this.input.split("&");
    this.selectedSeats = arrInput[0];
    this.movie = arrInput[1];
    this.cost = arrInput[2];

    this.payService
      .pay(this.movie, this.selectedSeats, this.cost)
      .subscribe(res => {
        this.bookingId = res;
      });
  }
}
