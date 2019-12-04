import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { SeatsComponent } from "./components/seats/seats.component";
import { PayComponent } from "./components/pay/pay.component";
import { ConfirmComponent } from "./components/confirm/confirm.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "movies", component: MoviesComponent },
  { path: "seats/:name", component: SeatsComponent },
  { path: "pay/:selectedSeats", component: PayComponent },
  { path: "confirm/:details", component: ConfirmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
