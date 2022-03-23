import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PessoaCreateComponent } from './components/view/pessoa/pessoa-create/pessoa-create.component';
import { PessoaReadComponent } from './components/view/pessoa/pessoa-read/pessoa-read.component';
import { PessoaUpdateComponent } from './components/view/pessoa/pessoa-update/pessoa-update.component';
import { PessoaDeleteComponent } from './components/view/pessoa/pessoa-delete/pessoa-delete.component' 

import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    PessoaCreateComponent,
    PessoaReadComponent,
    PessoaUpdateComponent,
    PessoaDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
