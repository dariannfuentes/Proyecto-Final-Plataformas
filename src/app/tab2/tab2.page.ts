import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

interface Ejercicios{
  nombre:string,
  grupomuscular:string,
  rangorep:string
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonModal)modal!: IonModal;
  isToastOpen = false;

  constructor() {}
  

  ejercicios: Ejercicios[] = [
    {nombre: 'Press de Banca',grupomuscular: 'Pecho', rangorep:'10-12'},
    {nombre: 'Sentadillas',grupomuscular: 'Piernas', rangorep:'8-10'},
    {nombre: 'Ropedown',grupomuscular: 'Triceps', rangorep:'8-10'},
    {nombre: 'Curl de biceps',grupomuscular: 'Biceps', rangorep:'6-8'},
    {nombre: 'Extensión de cuadriceps',grupomuscular: 'Piernas', rangorep:'4-6'},
    {nombre: 'Jalon en polea', grupomuscular: 'Espalda', rangorep: '6-10'}
  ];


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('confirm');
    this.isToastOpen = true
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}