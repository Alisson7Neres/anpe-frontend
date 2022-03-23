import { environment } from "src/environments/environment"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { PessoaModel } from "../model/pessoa-model"
import { Injectable } from "@angular/core"
import { MatSnackBar } from "@angular/material/snack-bar"

@Injectable({
    providedIn: 'root'
  })
export class PessoaService {

    constructor(private http: HttpClient, private _snack: MatSnackBar) {

    }

    url: String = environment.BASE_URL

    create(pessoa : PessoaModel) : Observable<any>{
        const url = `${this.url}/pessoa/`
        return this.http.post(url, pessoa);
    }

    findAll() : Observable<any> {
        const url = `${this.url}/pessoa/`
        return this.http.get(url);
    }

    findById(id : String) : Observable<PessoaModel> {
        const url = `${this.url}/pessoas/${id}`
        return this.http.get<PessoaModel>(url);
    }

    update(pessoa : PessoaModel) : Observable<any> {
        const url = `${this.url}/pessoa/${pessoa.id}`
        return this.http.put(url, pessoa)
    }

    delete(id : String) : Observable<void> {
        const url = `${this.url}/pessoas/${id}`
        return this.http.delete<void>(url);
    }

    mensagem(str : String) : void {
        this._snack.open(`${str}`, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
        })
    }
}
