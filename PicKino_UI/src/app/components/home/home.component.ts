import { Component, OnInit, ViewChild } from "@angular/core";
import { Movie } from "src/app/models/movie";
import { moviesService } from "src/app/services/movies.service";
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
    this.router.navigate(["/apply", { id: movie.id }]);
  }
}
