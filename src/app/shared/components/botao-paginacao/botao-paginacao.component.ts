import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-botao-paginacao',
  templateUrl: './botao-paginacao.component.html',
  styleUrls: ['./botao-paginacao.component.css']
})

export class BotaoPaginacaoComponent {
  @Input() pagina!: number;
  @Output() mudarPagina = new EventEmitter<number>();

  proxPagina: number = 0;
  paginaAnt: number = 0;

  constructor(public apiService: ApiService) {}

  voltarPagina(): void {
    this.paginaAnt = this.pagina == 0 ? 0 : this.pagina - 1;
    this.mudarPagina.emit(this.paginaAnt);
  }

  proximaPagina(): void {
    this.proxPagina = this.pagina + 1;
    this.mudarPagina.emit(this.proxPagina);
  }
}