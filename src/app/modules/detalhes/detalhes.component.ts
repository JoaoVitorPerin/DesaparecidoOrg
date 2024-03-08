import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/shared/services/api-service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  id: number = 0;
  infosDesaparecido: any;
  urlSite: any;

  constructor(private route: ActivatedRoute, public apiService: ApiService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.urlSite = this.location.path(true);
    this.urlSite = window.location.href;
    this.buscarDesaparecidos()
  }

  buscarDesaparecidos(): void {
    this.apiService.buscarDesaparecido(this.id).subscribe({
      next: (dados: any) => {
        this.infosDesaparecido = dados;
      }
    })
  }
}
