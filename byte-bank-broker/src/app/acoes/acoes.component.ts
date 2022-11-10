import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Acoes} from './modelo/acoes';
import {AcoesService} from './acoes.service';
@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit {
  acoes: Acoes
  acoesInput = new FormControl();

  constructor(private acoesService: AcoesService) {}

  ngOnInit() {
    this.acoesService.getAcoes().subscribe((data) => {
      this.acoes = data.payload
    }) 
  }
}
