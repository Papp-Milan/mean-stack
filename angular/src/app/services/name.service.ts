import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Name } from '../models/name.model';


const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Name[]> {
    return this.http.get<Name[]>(baseUrl);
  }

  get(id: any): Observable<Name> {
    return this.http.get<Name>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Name[]> {
    return this.http.get<Name[]>(`${baseUrl}?name=${name}`);
  }
}
