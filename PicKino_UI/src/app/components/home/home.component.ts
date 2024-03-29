import { Component, OnInit, ViewChild } from "@angular/core";
import { Movie } from "src/app/models/movie";
import { Seats } from "src/app/models/seats";
import { moviesService } from "src/app/services/movies.service";
import { seatsService } from "src/app/services/seats.service";
import { ModalDirective } from "angular-bootstrap-md";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: []
})
export class HomeComponent implements OnInit {
  @ViewChild("LoginModal") LoginModal: ModalDirective;

  movies: Movie[];
  seats: Seats[];

  selectedMovie: Movie;

  constructor(private insService: moviesService, private router: Router) {}

  ngOnInit() {
    this.insService.getmovies().subscribe(res => {
      this.movies = res;
    });
  }

  showIns(movie: Movie) {
    this.LoginModal.show();
    this.selectedMovie = movie;
  }

  applyForm(movie: Movie) {
    var movieName = this.selectedMovie.name;
    this.router.navigate(["/seats", movieName]);
  }
}
