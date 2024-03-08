import { Component, Input } from '@angular/core';
import { APIModel } from '../../models/api.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() desaparecido!: APIModel;
  urlFotoPadrao: string = '../../../../assets/perfil.png'
}