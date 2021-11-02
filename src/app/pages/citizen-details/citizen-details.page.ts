import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { citizen, CitizenService } from 'src/app/services/citizen.service';

@Component({
 
  selector: 'app-citizen-details',
  templateUrl: './citizen-details.page.html',
  styleUrls: ['./citizen-details.page.scss'],
})
export class CitizenDetailsPage implements OnInit {


  
  citizen: citizen = {
    task: 'name',
    createdAt: new Date().getTime(),
    priority: 0
  };
 

citizenId = null;
  constructor(private citizenService: CitizenService, private route: ActivatedRoute, private loadingController:LoadingController,
    private nav: NavController) { }

  ngOnInit() {
    this.citizenId = this.route.snapshot.params['id'];
    if (this.citizenId){
this.loadcitizen();
    }
  }

  
 
  async loadcitizen() {
    const loading = await this.loadingController.create({
      message: 'Loading post..'
    });
    await loading.present();
 
    this.citizenService.getcitizen(this.citizenId).subscribe(res => {
      loading.dismiss();
      this.citizen = res;
    });
  } 

  
  async saveCitizen() {
 
    const loading = await this.loadingController.create({
      message: 'Saving post..'
    });
    await loading.present();
 
    if (this.citizenId) {
      this.citizenService.updateCitizen(this.citizen, this.citizenId).then(() => {
        loading.dismiss();
       
      });
    } else {
      this.citizenService.addCitizen(this.citizen).then(() => {
        loading.dismiss();
     
      });
    }
  }


}
