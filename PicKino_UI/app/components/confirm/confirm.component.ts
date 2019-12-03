import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Seats } from "src/app/models/seats";
import { seatsService } from "src/app/services/seats.service";
import { Router } from "@angular/router";
import { Confirm } from 'src/app/models/confirm';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],

})
export class ConfirmComponent implements OnInit {

  constructor(private route: ActivatedRoute,  private router: Router) { }
  
  ngOnInit() {
    
 }

 
}
