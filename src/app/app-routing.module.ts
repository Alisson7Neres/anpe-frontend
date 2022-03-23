import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCreateComponent } from './components/view/pessoa/pessoa-create/pessoa-create.component';
import { PessoaDeleteComponent } from './components/view/pessoa/pessoa-delete/pessoa-delete.component';
import { PessoaReadComponent } from './components/view/pessoa/pessoa-read/pessoa-read.component';
import { PessoaUpdateComponent } from './components/view/pessoa/pessoa-update/pessoa-update.component';

const routes: Routes = [
  {path: '' , component: PessoaCreateComponent },
  {path: 'contatos', component: PessoaReadComponent},
  {path: 'contatos/update/:id', component:  PessoaUpdateComponent},
  {path: 'contatos/delete/:id', component:  PessoaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
