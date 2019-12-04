import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-pay",
  templateUrl: "./pay.component.html",
  styleUrls: ["./pay.component.scss"]
})
export class PayComponent implements OnInit {
  // public count: number;
  @Input() count: number;
  input: string;
  selectedSeats: string;
  cost: string;
  movie: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.input = params.get("selectedSeats");
    });

    var arrInput = this.input.split("&");
    this.selectedSeats = arrInput[0];
    this.cost = arrInput[1];
    this.movie = arrInput[2];
  }

  applyFormConfirm() {
    this.router.navigate([
      "/confirm",
      this.selectedSeats + "&" + this.movie + "&" + this.cost
    ]);
  }
}
