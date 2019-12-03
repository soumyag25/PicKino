import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Seats } from "src/app/models/seats";
import { seatsService } from "src/app/services/seats.service";
import { Router } from "@angular/router";
import { Pay } from 'src/app/models/pay';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss'],

})
export class PayComponent implements OnInit {
 // public count: number;
 @Input() count: number;
  constructor(private route: ActivatedRoute,  private router: Router) { }
  
  ngOnInit() {
    
 }

 applyFormConfirm() {
   this.router.navigate(['confirm']);
 }

}
