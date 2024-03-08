import { APIModel } from '../models/api.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    buscarDesaparecidosPaginado(pagina: number): Observable<APIModel> {
        const URL = `https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro?faixaIdadeFinal=0&faixaIdadeInicial=0&nome=&porPagina=12&sexo=&status=DESAPARECIDO&pagina=${pagina}`;
        return this.http.get<APIModel>(URL);
    }

    pesquisa(nome: string, sexo: string, idade: string): Observable<APIModel> {
        const URL = `https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro?faixaIdadeFinal=${idade}&faixaIdadeInicial=${idade}&nome=${nome}&porPagina=12&sexo=${sexo}&status=DESAPARECIDO&pagina=`;
        return this.http.get<APIModel>(URL);
    }

    buscarDesaparecido(idPessoa: number): Observable<APIModel> {
        const URL = `https://abitus-api.pjc.mt.gov.br/v1/pessoas/${idPessoa}`;
        return this.http.get<APIModel>(URL);
    }
}
