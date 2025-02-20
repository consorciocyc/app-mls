import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ListAcountPage } from '../list-acount/list-acount.page';
let NewClientPage = class NewClientPage {
    constructor(loginServiceService, toastController, modalController, navParams) {
        this.loginServiceService = loginServiceService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.navParams = navParams;
        this.imgUser = '../assets/iconos/network.svg';
        this.hidden = true;
        this.hidden1 = true;
        this.NewCliente = new FormGroup({
            idclient: new FormControl(''),
            name_cliente: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required]),
            identification: new FormControl('', [Validators.required]),
            mail: new FormControl('', [Validators.required, Validators.email]),
            state: new FormControl(),
            idstate: new FormControl()
        });
        const data = navParams.get('data');
        if (data != null) {
            this.NewCliente.get('idclient').setValue(data.id_client);
            this.NewCliente.get('name_cliente').setValue(data.name_client);
            this.NewCliente.get('phone').setValue(data.phone);
            this.NewCliente.get('identification').setValue(data.id_client);
            this.NewCliente.get('mail').setValue(data.email);
            this.NewCliente.get('idstate').setValue(data.idstate);
            this.NewCliente.get('state').setValue(data.state);
            this.hidden1 = false;
        }
        else {
            this.hidden = false;
        }
    }
    ngOnInit() {
    }
    save() {
        if (this.NewCliente.value.name_cliente == '') {
        }
        const params = {
            idclient: this.NewCliente.value.idclient,
            name_client: this.NewCliente.value.name_cliente,
            phone: this.NewCliente.value.phone,
            id_client: this.NewCliente.value.identification,
            email: this.NewCliente.value.mail,
            state: this.NewCliente.value.idstate,
        };
        this.loginServiceService.SaveCliente(params).subscribe(result => {
            if (result.response == true) {
                this.presentToast('Se creo el Cliente');
                this.NewCliente.get('idclient').setValue(result.id);
                this.hidden = true;
                this.hidden1 = false;
            }
            if (result.response == false) {
                this.presentToast('Se Actualizo el Cliente');
                this.hidden = true;
                this.hidden1 = false;
            }
        }, error => {
        });
    }
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    back() {
        this.modalController.dismiss({
            'dismissed': false,
        });
    }
    edit() {
        this.hidden = false;
        this.hidden1 = true;
    }
    ModalAcount(Client) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ListAcountPage,
                componentProps: {
                    'idclient': this.NewCliente.value.idclient,
                }
            });
            modal.onDidDismiss().then((detail) => {
            });
            yield modal.present();
        });
    }
};
NewClientPage = tslib_1.__decorate([
    Component({
        selector: 'app-new-client',
        templateUrl: './new-client.page.html',
        styleUrls: ['./new-client.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService,
        ToastController,
        ModalController,
        NavParams])
], NewClientPage);
export { NewClientPage };
//# sourceMappingURL=new-client.page.js.map