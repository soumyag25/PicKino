import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent} from './components/movies/movies.component';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { SeatsComponent } from './components/seats/seats.component';
import { PayComponent } from './components/pay/pay.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'apply', component: ApplyFormComponent},
  { path: 'seats/:id', component: SeatsComponent},
  { path: 'pay', component: PayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
