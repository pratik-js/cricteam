import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) {}

  async insert(data) {
    try {
      const res = await this.http
        .post('/api/team', data, httpOptions)
        .toPromise();
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async update(id, data) {
    try {
      const res = await this.http
        .patch('/api/team/' + id, data, httpOptions)
        .toPromise();
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async delete(id) {
    try {
      const res = await this.http.delete('/api/team/' + id).toPromise();
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  list(): Observable<any> {
    return this.http.get('/api/team');
  }
}
