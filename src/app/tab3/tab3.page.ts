import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

interface Ejercicios{
  nombre: string;
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(IonModal)modal!: IonModal;
  isToastOpen = false;

  constructor() {}

  rutinaPecho: Ejercicios[] = [
    {nombre: 'Press de banca'},
    {nombre: 'Press de banca inclinado'},
    {nombre: 'Peck Deck'}
  ]
  rutinaEspalda: Ejercicios[] = [
    {nombre: 'Jalon al pecho'},
    {nombre: 'Remo Gironda'},
    {nombre: 'Pull Ups'}
  ]
  rutinaPiernas: Ejercicios[] = [
    {nombre: 'Sentadilla Hack'},
    {nombre: 'Peso muerto'},
    {nombre: 'Extension de cuadriceps'}
  ]

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('confirm');
    this.isToastOpen = true;
  }


  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
