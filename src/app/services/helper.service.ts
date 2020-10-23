import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController
    ) { }


  async presentLoader(message) {
    const loading = await this.loadingController.create({
      message: message,
      duration: 2000,
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();
    


    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }



}
