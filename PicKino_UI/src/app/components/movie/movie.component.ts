import { Component, OnInit, Input } from "@angular/core";
import { Institution } from "src/app/models/institution";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  @Input() selMovie: Institution;

  constructor() {}

  ngOnInit() {}
}
