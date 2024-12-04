import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmploiDuTemps } from '../models/emploi-du-temps.model'; // Adjust the import according to your model path

@Injectable({
  providedIn: 'root'
})
export class EmploiDuTempsService {
  private apiUrl = 'http://localhost:8000/api/emplois-du-temps'; // Symfony backend URL

  constructor(private http: HttpClient) {}

  create(emploiDuTemps: EmploiDuTemps): Observable<any> {
    return this.http.post(this.apiUrl, emploiDuTemps);
  }

  getEmploisDuTemps(): Observable<EmploiDuTemps[]> {
    return this.http.get<EmploiDuTemps[]>(this.apiUrl);
  }

  getEmploiDuTempsById(id: number): Observable<EmploiDuTemps> {
    return this.http.get<EmploiDuTemps>(`${this.apiUrl}/${id}`);
  }

  updateEmploiDuTemps(id: number, updatedFields: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedFields);
  }

  deleteEmploiDuTemps(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
