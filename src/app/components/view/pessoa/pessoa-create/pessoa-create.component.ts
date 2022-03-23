import { Component, OnInit } from '@angular/core';
import { PessoaModel } from 'src/app/components/model/pessoa-model';
import { PessoaService } from 'src/app/components/service/pessoa-service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  pessoaModel: PessoaModel = {
    id: undefined!,
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
  }

  nome = new FormControl('', [Validators.minLength(2)]);
  sobrenome = new FormControl('', [Validators.minLength(4)]);
  cep = new FormControl('', [Validators.minLength(8)]);

  constructor(private http: HttpClient, private pessoaService: PessoaService, private router: Router) { }

  ngOnInit(): void {
  }

  getMessage(field: String) {

    let anyInvalid = this.nome.invalid || this.sobrenome.invalid || this.cep.invalid;

    if (this.nome.invalid && field == "nome") {
      return 'Nome tem que ter no mínimo 2 caracteres, é no máximo 20 caracteres'
    }

    if (this.sobrenome.invalid && field == "sobrenome") {
      return 'Sobrenome tem que ter no mínimo 4 caracteres, é no máximo 50 caracteres'
    }

    if (this.cep.invalid && field == "cep") {
      return "Preencha o CEP corretamente!"
    }

    if (anyInvalid && field == "button") {
      return true;
    }


    return false;
  }

  create() {
    this.pessoaService.create(this.pessoaModel).subscribe((data) => {
      this.pessoaService.mensagem('Cadastrado!');
      setTimeout(() =>
        this.router.navigate(['contatos']), 3000
      )
    }, err => { this.pessoaService.mensagem("ERROR! CONTATE O SUPORTE!") })
  }

getCpfMask(): string {
  return '000.000.000-00';
}

getCnpjMask(): string {
  return '00.000.000/0000-00';
}

getCepMask(): string {
  return "00000-000"
}

}
