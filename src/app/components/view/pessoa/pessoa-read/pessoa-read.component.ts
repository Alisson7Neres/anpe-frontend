import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { PessoaModel } from 'src/app/components/model/pessoa-model';
import { PessoaService } from 'src/app/components/service/pessoa-service';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.css']
})
export class PessoaReadComponent implements OnInit {

  pessoas: PessoaModel[] = [];

  id: string = '';

  displayedColumns: string[]  = ['nome', 'sobrenome', 'cpf',  'cnpj', 
  'cep', 'logradouro', 'complemento', 'bairro', 'localidade', 'uf', 'acoes'];
  
  pessoaModel: PessoaModel = {
    id: '',
    nome: '',
    sobrenome: '',
    cpf: '',
    cnpj: '',

    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: ''
  };

  constructor(private http : HttpClient,private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.findAll();
  }


  findAll() {
    this.pessoaService.findAll().subscribe((data) => {
      this.pessoas = data;
    })
  }
}
