import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { SearchboxComponent } from "./components/searchbox/searchbox.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { moviesService } from "./services/movies.service";
import { MovieComponent } from "./components/movie/movie.component";
import { seatsService } from "./services/seats.service";
import { SeatsComponent } from "./components/seats/seats.component";
import { payService } from "./services/pay.service";
import { PayComponent } from "./components/pay/pay.component";
import { ConfirmComponent } from "./components/confirm/confirm.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SearchboxComponent,
    MoviesComponent,
    MovieComponent,
    SeatsComponent,
    PayComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [moviesService, seatsService, payService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
