import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  base_url = environment.baseUrl;
  private token = localStorage.getItem('token') || '';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': this.token ? `Bearer ${this.token}` : ''
    });
  }

  updateToken(token: string) {
    this.token = token;
  }

  
    get(url: string) {
    
      return new Promise(resolve => {
        this.http.get<any>(this.base_url + url).subscribe((data: any) => {
          //let d = JSON.parse(data);
          resolve(data);
        }, (err) => {
          //resolve(err);
          console.log(err);
        });
      });
    }
  
  
    post(url: string, params: any) {
     
      return new Promise(resolve => {
        this.http.post<any>(this.base_url + url, params).subscribe((data: any) => {
          //let d = JSON.parse(data);
          resolve(data);
        }, (err) => {
          console.log(err);
        });
      });
    }
  
  
    put(url: string, params: any) {
    
      return new Promise(resolve => {
        this.http.put<any>(this.base_url + url, params, ).subscribe((data: any) => {
          //let d = JSON.parse(data);
          resolve(data);
        }, (err) => {
          console.log(err);
        });
      });
    }
  
  
  }