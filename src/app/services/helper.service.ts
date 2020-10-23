import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(public loadingController: LoadingController) { }


  async presentLoader(message) {
    const loading = await this.loadingController.create({
      message: message,
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();
    


    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }



}
