import { Component, OnInit } from '@angular/core';
import { citizen, CitizenService } from '../services/citizen.service';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  citizens: citizen[];
 
  constructor(private citizenService: CitizenService) { }
 
  ngOnInit() {
    this.citizenService.getCitizens().subscribe(res => {
      this.citizens = res;
    });
  }
 
  remove(item) {
    this.citizenService.removeCitizen(item.id);
  }
}