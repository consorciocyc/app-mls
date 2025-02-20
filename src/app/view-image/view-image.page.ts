import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { LoginServiceService } from '../Services/login-service.service';
import { ZoomImagePage } from '../zoom-image/zoom-image.page';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.page.html',
  styleUrls: ['./view-image.page.scss'],
})
export class ViewImagePage implements OnInit {


  data
  photos
  url = 'http://34.229.55.185/laravel-mls/public/public/';
  image
  idservice
  constructor(public modalController: ModalController, private navParams: NavParams, private loginServiceService: LoginServiceService) {
    this.data = navParams.get('data');
    this.idservice = navParams.get('idservice');

  }

  ngOnInit() {
    this.search();
  }

  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }
  search() {
    const params = {
      idservice: this.idservice,
      id_odi: this.data.idodi
    }
    this.loginServiceService.ViewImage(params).subscribe(result => {
      this.photos = result.response;

    }, error => { })
  }

  async  ModalImage(image) {

    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ZoomImagePage,
        componentProps: {
          'image': image,
        }

      });

    modal.onDidDismiss().then((detail) => {


    });

    await modal.present();
  }


}