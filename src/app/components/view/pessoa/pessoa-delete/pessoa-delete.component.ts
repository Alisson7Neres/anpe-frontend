import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaModel } from 'src/app/components/model/pessoa-model';
import { PessoaService } from 'src/app/components/service/pessoa-service';

@Component({
  selector: 'app-pessoa-delete',
  templateUrl: './pessoa-delete.component.html',
  styleUrls: ['./pessoa-delete.component.css']
})
export class PessoaDeleteComponent implements OnInit {

  id: string = '';

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

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pessoaModel.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.pessoaService.findById(this.pessoaModel.id!).subscribe(data => {
      this.pessoaModel.nome = data.nome
      this.pessoaModel.sobrenome = data.sobrenome
      this.pessoaModel.cpf = data.cpf
      this.pessoaModel.cnpj = data.cnpj

      this.pessoaModel.cep = data.cep
      this.pessoaModel.logradouro = data.logradouro
      this.pessoaModel.complemento = data.complemento
      this.pessoaModel.bairro = data.bairro
      this.pessoaModel.localidade = data.localidade
      this.pessoaModel.uf = data.uf

    })
  }

  delete() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    if (confirm('Deseja mesmo remover?')) {

      this.pessoaService.delete(this.pessoaModel.id).subscribe((resposta) => {
        this.pessoaService.mensagem("Deletado")
        this.router.navigate(['contatos'])

      })
    }
  }


}
