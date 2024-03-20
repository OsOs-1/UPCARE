import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss']
})
export class EmergencyComponent {


  dropToggle() {
    $('.drop').fadeToggle()
  }
}
