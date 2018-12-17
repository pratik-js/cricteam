import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
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
export class PlayerService {
  constructor(private http: HttpClient) {}

  async insert(data) {
    try {
      const res = await this.http
        .post('/api/player', data, httpOptions)
        .toPromise();
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async update(id, data) {
    try {
      const res = await this.http
        .patch('/api/player/' + id, data, httpOptions)
        .toPromise();
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async delete(id) {
    try {
      const res = await this.http.delete('/api/player/' + id).toPromise();
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  list(): Observable<any> {
    return this.http.get('/api/player');
  }

  getPlayerTypes() {
    return [
      { value: 1, text: 'All rounder' },
      { value: 2, text: 'Batsman' },
      { value: 3, text: 'Bowler' },
      { value: 4, text: 'Wicket Keeper' }
    ];
    // ['All rounder', 'Batsman', 'Bowler', 'Wicket Keeper']
  }
}
