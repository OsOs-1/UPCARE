import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {

  dropToggle() {
    $('.drop').fadeToggle()
  }
}
