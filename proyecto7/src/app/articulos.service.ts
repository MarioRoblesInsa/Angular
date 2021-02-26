import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Articulo{
  codigo: number,
  descripcion: string
  precio: number
}

@Injectable({
  providedIn: 'root'
})

export class ArticulosService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get<Articulo[]>("http://scratchya.com.ar/vue/datos.php");
  } 
}
