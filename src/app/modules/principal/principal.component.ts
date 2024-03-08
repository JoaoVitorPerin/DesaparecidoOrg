import { Component, OnInit } from '@angular/core';
import { APIModel } from 'src/app/shared/models/api.model';
import { ApiService } from 'src/app/shared/services/api-service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{
  title = 'listagemDesaparecidos';
  listaDesaparecidos: Array<APIModel> = []
  paginaAtual: number = 0;

  constructor(public apiService: ApiService){
  }

  ngOnInit() {
    this.buscarDesaparecidos()
  }

  atualizarListaDesaparecidos(dados: any[]) {
    this.listaDesaparecidos = dados;
  }

  buscarDesaparecidos(pagina: number = 0): void {
    this.apiService.buscarDesaparecidosPaginado(pagina).subscribe({
      next: (dados: any) => {
        this.paginaAtual = pagina;
        this.listaDesaparecidos = dados.content;
      }
    });
  }
}
