import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ModalController } from '@ionic/angular';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { LoadingController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TasksService } from '../Services/tasks-service';
import { constant } from '../utilitis/constant';
let SendimagesPage = class SendimagesPage {
    constructor(route, router, imagePicker, transfer, file, loadingController, fileChooser, navParams, modalController, camera, actionSheetController, toastController, tasksService) {
        this.route = route;
        this.router = router;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.file = file;
        this.loadingController = loadingController;
        this.fileChooser = fileChooser;
        this.navParams = navParams;
        this.modalController = modalController;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.tasksService = tasksService;
        this.photos = [];
        this.win = window;
        this.response = true;
        this.falso = true;
        this.row_data = [];
        this.constant = new constant();
        this.number_service = navParams.get('number_service');
        this.type_network = navParams.get('type_network');
        this.data = navParams.get('data');
        this.photos_service = navParams.get('photos_service');
        this.idservice = navParams.get('idservice');
        for (let index = 0; index < this.photos_service.quantity; index++) {
            this.photos.push({
                imagenes: '',
                id: index,
                hidden: false,
                name_photo: this.photos_service.name_photo,
                hidden_image: true,
                idodi: this.data.idodi,
                tipe: this.photos_service.idphotos,
                contract_idcontract: this.data.contract_idcontract,
                state: true,
                state_send: false,
                send: true,
                error: true,
            });
        }
        this.file.checkDir(this.file.externalRootDirectory, 'MLS').then(_ => console.log('exist')).catch(err => {
            this.dir();
            console.log('no exist');
        });
    }
    ngOnInit() {
    }
    selectImage(photo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Sellecione la Imagen",
                buttons: [{
                        text: 'Galería',
                        icon: 'photos',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, photo);
                            //this.choosePicture(photo)
                        }
                    },
                    {
                        text: 'Camara',
                        icon: 'camera',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA, photo);
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    pickImage(sourceType, photo) {
        const options = {
            quality: 100,
            targetWidth: 1920,
            targetHeight: 1080,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            let path = this.win.Ionic.WebView.convertFileSrc(imageData);
            photo.imagenes = path;
            // console.log(_imagePath[0])
            // console.log(photo)
            photo.hidden = true;
            photo.hidden_image = false;
        }, (err) => {
            // Handle error
        });
    }
    choosePicture(photo) {
        let options = {
            title: "selecionar imagen",
            message: "select 1",
            maximumImagesCount: 1,
            outType: 0,
            width: 1080,
            height: 720,
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.imagePicker.getPictures(options).then(_imagePath => {
            let path = this.win.Ionic.WebView.convertFileSrc(_imagePath[0]);
            photo.imagenes = path;
            photo.hidden = true;
            photo.hidden_image = false;
        }, err => { });
    }
    onLoadimage(img, id, name_photo, idodi, tipe, contract_idcontract) {
        let params = {
            idodi: idodi,
            tipe: tipe,
            contract_idcontract: contract_idcontract,
            idservice: this.idservice
        };
        this.tasksService.SelectImageOne(tipe, idodi, this.idservice).then(tasks => {
            this.row_data = tasks[0];
            this.number = this.row_data.actual + 1;
        })
            .catch(error => {
            console.error(error);
        });
        let canvas = this.canvasRef.nativeElement;
        let context = canvas.getContext("2d");
        let source = new Image();
        source.crossOrigin = "Anonymous";
        source.onload = () => {
            canvas.height = source.height;
            canvas.width = source.width;
            canvas.style.width = "320px";
            canvas.style.height = "300px";
            context.drawImage(source, 0, 0);
            context.font = "16px impact";
            context.textAlign = "right";
            context.fillStyle = "white";
            context.fillText(name_photo, 600, 100);
            let quality = [1.0];
            let imagen = canvas.toDataURL("image/jpeg");
            const fileTransfer = this.transfer.create();
            let divisiones = img.split("cache/");
            let divisiones1 = divisiones[1].split("?");
            let divisiones2 = divisiones[0].split("_app_file_");
            let options = {
                fileKey: "file",
                fileName: divisiones1[0],
                headers: {},
                params: { params: params }
            };
            fileTransfer
                .upload(imagen, this.constant.routeGlobal + "odi/send_image_movil", options)
                .then(data => {
                var json = JSON.parse(data.response);
                if (json.response == true) {
                    this.photos[id].state = true;
                    this.photos[id].state_send = true;
                    this.photos[id].send = false;
                    this.tasksService.update(tipe, idodi, this.idservice, this.number)
                        .then(response => {
                        console.log(response);
                    })
                        .catch(error => {
                        console.error(error);
                    });
                    this.file.removeFile('file:///' + divisiones2[1] + "cache/", divisiones1[0]);
                }
                else {
                    this.photos[id].state = false;
                    this.photos[id].state_send = true;
                    this.photos[id].error = false;
                    this.writeFile(imagen, "My Picture", divisiones1[0]);
                    this.falso = false;
                    this.file.removeFile('file:///' + divisiones2[1] + "cache/", divisiones1[0]);
                }
            }, err => {
                console.log(err.body);
                this.photos[id].state = false;
                this.photos[id].state_send = true;
                this.photos[id].error = false;
                this.writeFile(imagen, "My Picture", divisiones1[0]);
                this.tasksService.InsertICertificate(divisiones1[0], tipe, idodi, this.idservice)
                    .then(response => {
                    console.log(response);
                })
                    .catch(error => {
                    console.error(error);
                });
                this.file.removeFile('file:///' + divisiones2[1] + "cache/", divisiones1[0]);
                this.presentToast('Error de Coneción');
            });
        };
        source.src = img;
    }
    presentToast(mesajje) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mesajje,
                duration: 2000
            });
            toast.present();
        });
    }
    send_image() {
        this.showLoader();
        for (let data of this.photos) {
            if (data.imagenes == '') {
            }
            else {
                if (data.state_send == false) {
                    this.onLoadimage(data.imagenes, data.id, data.name_photo, data.idodi, data.tipe, data.contract_idcontract);
                }
            }
        }
    }
    showLoader() {
        this.loaderToShow = this.loadingController.create({
            message: 'Enviando'
        }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => {
                console.log('Loading');
            });
        });
        this.hideLoader();
    }
    hideLoader() {
        setTimeout(() => {
            this.loadingController.dismiss();
        }, 4000);
    }
    back() {
        this.modalController.dismiss({
            'dismissed': false,
        });
    }
    //////////////////////////////////////////////////////base 64 store///////////////////////////////////////////////////////////////////////////////////////////
    //here is the method is used to write a file in storage
    writeFile(base64Data, folderName, fileName) {
        let content = this.getContentbase64Data(base64Data);
        let contentType = this.getContentType(base64Data);
        let DataBlob = this.base64toBlob(content, contentType);
        // here iam mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. You can change a file path whatever pre-defined method.
        let filePath = this.file.externalRootDirectory + "MLS/";
        this.file
            .writeFile(filePath, fileName, DataBlob, contentType)
            .then(success => {
            console.log("File Writed Successfully", success);
        })
            .catch(err => {
            console.log("Error Occured While Writing File", err);
        });
    }
    //here is the method is used to get content type of an bas64 data
    getContentType(base64Data) {
        let block = base64Data.split(";");
        let contentType = block[0].split(":")[1];
        return contentType;
    }
    getContentbase64Data(base64Data) {
        let block = base64Data.split(";");
        let contentType = block[1].split(",")[1];
        return contentType;
    }
    //here is the method is used to convert base64 data to blob data
    base64toBlob(b64Data, contentType) {
        contentType = contentType || "";
        let sliceSize = 512;
        let byteCharacters = atob(b64Data);
        let byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);
            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        let blob = new Blob(byteArrays, {
            type: contentType
        });
        return blob;
    }
    dir() {
        this.file.createDir(this.file.externalRootDirectory, 'MLS', false).then(response => {
            console.log('Directory create' + response);
        }).catch(err => {
            console.log('Directory no create' + JSON.stringify(err));
        });
    }
};
tslib_1.__decorate([
    ViewChild('layout', { static: true }),
    tslib_1.__metadata("design:type", Object)
], SendimagesPage.prototype, "canvasRef", void 0);
SendimagesPage = tslib_1.__decorate([
    Component({
        selector: 'app-sendimages',
        templateUrl: './sendimages.page.html',
        styleUrls: ['./sendimages.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router, ImagePicker,
        FileTransfer,
        File,
        LoadingController,
        FileChooser,
        NavParams,
        ModalController,
        Camera,
        ActionSheetController,
        ToastController,
        TasksService])
], SendimagesPage);
export { SendimagesPage };
//# sourceMappingURL=sendimages.page.js.map