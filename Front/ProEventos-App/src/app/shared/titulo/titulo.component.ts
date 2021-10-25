import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
})
export class TituloComponent implements OnInit {
  @Input() titulo!: string;
  @Input() subtitulo = 'Desde 2021';
  @Input() iconclass = 'fa fa-user';
  @Input() botaoListar = false;

  // public eventos: Evento[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  listar(): void {
    // console.log("teste", this.titulo);
    this.router.navigate([`/${this.titulo.toLocaleLowerCase()}/lista`]);
  }
}
