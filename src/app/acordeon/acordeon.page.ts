import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoginServiceService } from '../Services/login-service.service';

import { NgForm } from '@angular/forms'; @Component({
    selector: 'app-acordeon',
    templateUrl: './acordeon.page.html',
    styleUrls: ['./acordeon.page.scss'],
})
export class AcordeonPage implements OnInit {
    step = { sectionName: null };
    public data: any;

    priority
    sede
    programming
    Attention
    gas_type
    type_service
    type_network
    address
    addrees_ini
    photos_services
    number_service;
    div_hidden = true;

    name_priority
    name_gas
    name_type
    name_network
    contract_name
    client
    identifacation
    phone
    constructor(private route: ActivatedRoute, private router: Router, private launchNavigator: LaunchNavigator, private geolocation: Geolocation, private loginServiceService: LoginServiceService) {

        this.route.queryParams.subscribe(params => {


            if (this.router.getCurrentNavigation().extras.state) {

                this.data = this.router.getCurrentNavigation().extras
                console.log(this.data)
                this.name_priority = this.data.name_priority


                this.programming = this.data.date_programming
                this.Attention = this.data.Attention
                this.name_gas = this.data.name_gas
                this.name_type = this.data.name_type
                this.name_network = this.data.name_network
                this.contract_name = this.data.contract_name
                this.client = this.data.client
                this.identifacation = this.data.identifacation
                this.phone = this.data.phone
                //                 this.gas_type = this.data.
                this.type_service = this.data.type_service_idtype_service
                this.type_network = this.data.type_network_idtype_network
                this.address = this.data.address
                this.number_service = this.data.idodi
            }
        });

        this.coords();

    }

    ngOnInit(): void {

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
    back() {
        this.router.navigateByUrl('menu/menu/asignadas');
    }


    coords() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            this.addrees_ini = resp.coords.latitude + "," + resp.coords.longitude

        }).catch((error) => {
            console.log('Error getting location', error);
        });

    }
    send_address() {
        let options: LaunchNavigatorOptions = {
            start: this.addrees_ini,
            app: this.launchNavigator.APP.GOOGLE_MAPS
        }

        this.launchNavigator.navigate(this.address, options)
            .then(
                success => console.log('Launched navigator'),
                error => console.log('Error launching navigator', error)
            );
    }

    photo_service() {
        let params = {
            type_network: this.type_network
        }
        this.loginServiceService.photos_service(params).subscribe(result => {
            this.photos_services = result.response
        }, error => {

        })
    }

    photos_add(photos_service) {

        let navigationExtras: NavigationExtras = {
            queryParams: {
                photos_service: photos_service,
                data: this.data
            }
        };

        this.router.navigate(['menu/menu/fotografias'], navigationExtras);
    }
}
