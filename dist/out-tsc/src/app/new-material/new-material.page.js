import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
let NewMaterialPage = class NewMaterialPage {
    constructor(loginServiceService, toastController, modalController, navParams) {
        this.loginServiceService = loginServiceService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.navParams = navParams;
        this.step = { sectionName: null };
        this.imgUser = '../assets/iconos/1683018.svg';
        this.hidden = true;
        this.hidden1 = true;
        this.certificates = [];
        this.NewMaterial = new FormGroup({
            idmaterials: new FormControl(''),
            name_materials: new FormControl('', [Validators.required]),
            state: new FormControl(),
            idstate: new FormControl(),
            codigo: new FormControl(),
            date_expiration: new FormControl(),
            idmaterial_certificate: new FormControl(),
        });
        const data = navParams.get('data');
        this.idmaterial = navParams.get('idmaterial');
        if (data != null) {
            this.NewMaterial.get('idmaterials').setValue(data.idmaterials);
            this.NewMaterial.get('name_materials').setValue(data.name_materials);
            this.NewMaterial.get('state').setValue(data.state);
            this.NewMaterial.get('idstate').setValue(data.idstate);
            this.NewMaterial.get('codigo').setValue(data.codigo);
            this.NewMaterial.get('date_expiration').setValue(data.date_expiration);
            this.NewMaterial.get('idmaterial_certificate').setValue(data.idmaterial_certificate);
            this.hidden1 = false;
        }
        else {
            this.hidden = false;
        }
    }
    ngOnInit() {
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
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    save() {
        const params = {
            idmaterials: this.NewMaterial.value.idmaterials,
            name_materials: this.NewMaterial.value.name_materials,
            state_one_idstate_one: 3,
        };
        this.loginServiceService.CreateMaterial(params).subscribe(result => {
            if (result.response == true) {
                this.presentToast('Se creo el Material');
                this.NewMaterial.get('idmaterials').setValue(result.idmaterials);
                this.NewMaterial.get('state').setValue('Por Confirmar');
                this.hidden = true;
                this.hidden1 = false;
            }
            if (result.response == false) {
                this.presentToast('Se Actualizo el Material');
                this.hidden = true;
                this.hidden1 = false;
            }
        }, error => {
        });
    }
    getNameValid(sectionName) {
        return this.step.sectionName === sectionName;
    }
    setStep(sectionName) {
        this.step.sectionName = sectionName !== this.step.sectionName ? sectionName : null;
    }
    getIconName(sectionName) {
        return this.getNameValid(sectionName) ? 'arrow-down' : 'arrow-forward';
    }
    listmaterial() {
        this.loginServiceService.MaterialCertificate(this.NewMaterial.value.idmaterials).subscribe(result => {
            this.certificates = result.response;
        }, error => {
        });
    }
};
NewMaterialPage = tslib_1.__decorate([
    Component({
        selector: 'app-new-material',
        templateUrl: './new-material.page.html',
        styleUrls: ['./new-material.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginServiceService,
        ToastController,
        ModalController,
        NavParams])
], NewMaterialPage);
export { NewMaterialPage };
//# sourceMappingURL=new-material.page.js.map