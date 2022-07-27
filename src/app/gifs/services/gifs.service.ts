import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GifsService {
  private apiKey: string = 'lzoywkOJwQIKCtftdTSpwr1bUraYiToO'
  private _historial: string[] = [];
  public resultado: any[] = [];
  get historial(){
    return[...this._historial]
  }
  constructor(private http: HttpClient){

  }
  buscarGif(query:string = ''){
    query = query.trim().toLocaleLowerCase();
    if ( !this._historial.includes(query) ){
        this._historial.unshift(query)
        this._historial = this._historial.slice(0,10)
        localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key='+this.apiKey+'&q='+query+'&limit=10&offset=0&rating=G&lang=es')
    .subscribe((resp:any)=>{
      console.log(resp.data);
      this.resultado = resp.data;
    })
  }
}
