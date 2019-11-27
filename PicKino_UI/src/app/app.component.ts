import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <app-header></app-header>
      <main>
        <div class="container-fluid ep-add-padding">
          <router-outlet></router-outlet>
        </div>
        </main>
      <app-footer></app-footer>
  `,
  styles: [`
    .ep-add-padding {
      padding-top: 70px;
      padding-bottom: 20px;
    }
  `]
})
export class AppComponent {
  title = 'ed-pay';
}
