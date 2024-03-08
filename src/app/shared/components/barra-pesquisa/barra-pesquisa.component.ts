import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent {
  nome = new FormControl('');
  sexo = new FormControl('');
  idade = new FormControl('');

  @Output() pesquisaRealizada = new EventEmitter<any[]>();

  constructor(public apiService: ApiService) {}

  pesquisar(): void {
    const resultadoPesquisa = {
      nome: this.nome.value,
      sexo: this.sexo.value ,
      idade: this.idade.value,
    };

    if(!resultadoPesquisa.nome && !resultadoPesquisa.sexo && !resultadoPesquisa.idade){
      alert('Preencha pelo menos um campo da pesquisa!');
      return
    }

    if (typeof resultadoPesquisa.nome !== 'string') {
      alert('Por favor, insira um nome válido!');
      return;
    }

    this.apiService.pesquisa(resultadoPesquisa.nome!, resultadoPesquisa?.sexo!, resultadoPesquisa?.idade!).subscribe({
      next: (dados: any) => {
        if (dados.content && dados.content.length === 0) {
          alert('Nenhuma pessoa encontrada com esses dados!');
          return;
        }
        this.pesquisaRealizada.emit(dados.content);
      }
    })
    this.nome.setValue('')
    this.sexo.setValue('')
    this.idade.setValue('')
  }
}
