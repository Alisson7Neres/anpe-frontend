import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaModel } from 'src/app/components/model/pessoa-model';
import { PessoaService } from 'src/app/components/service/pessoa-service';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.css']
})
export class PessoaUpdateComponent implements OnInit {

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

  nome = new FormControl('', [Validators.minLength(2)]);
  sobrenome = new FormControl('', [Validators.minLength(4)]);
  cep = new FormControl('', [Validators.minLength(8)]);

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pessoaModel.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
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

  update() {
    this.pessoaService.update(this.pessoaModel).subscribe((resposta) => {
      setTimeout( () => {
        this.pessoaService.mensagem("Atualizado")
        this.router.navigate(['contatos'])
      }, 3000)
    },err => { this.pessoaService.mensagem("ERROR! CONTATE O SUPORTE!") } )
  };

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
