import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
  private teamNames = null;
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
  async list() {
    return await this.http.get('/api/team').toPromise();
  }

  async intiTeamNames() {
    if (this.teamNames) {
      return this.teamNames;
    }
    this.teamNames = {};
    this.teamNames['options'] = [];
    const resData: any = await this.list();
    for (let index = 0, teamId; index < resData.length; index++) {
      teamId = resData[index].teamId;
      this.teamNames[teamId] = resData[index].name;
      this.teamNames['options'].push({
        id: teamId,
        text: resData[index].name
      });
    }

    return this.teamNames;
  }

  getTeamNames() {
    return this.teamNames;
  }
}
