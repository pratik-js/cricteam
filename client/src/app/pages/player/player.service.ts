import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TeamService } from '../team/team.service';

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

  async list() {
    return await this.http.get('/api/player').toPromise();
  }

  async insertMany(dataList) {
    try {
      const res = await this.http
        .post('/api/player-bulk', { players: dataList }, httpOptions)
        .toPromise();
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  getPlayerTypes() {
    return [
      { value: 1, text: 'All rounder' },
      { value: 2, text: 'Batsman' },
      { value: 3, text: 'Bowler' },
      { value: 4, text: 'Wicket Keeper' }
    ];
  }
  getPlayerTypeText() {
    return ['All rounder', 'Batsman', 'Bowler', 'Wicket Keeper'];
  }

  initForm({
    name = '',
    playerTypeId = 1,
    teamId = 0,
    isNew = false,
    point = 0,
    sold = false,
    isCaptain = false,
    isActive = true,
    records = null
  }) {
    const { match = 0, runs = 0, wickets = 0, catches = 0 } = records || {};
    return new FormGroup({
      name: new FormControl(name, Validators.required),
      playerTypeId: new FormControl(playerTypeId),
      teamId: new FormControl(teamId),
      isNew: new FormControl(isNew),
      point: new FormControl(point),
      sold: new FormControl(sold),
      isCaptain: new FormControl(isCaptain),
      isActive: new FormControl(isActive),
      records: new FormGroup({
        match: new FormControl(match),
        runs: new FormControl(runs),
        wickets: new FormControl(wickets),
        catches: new FormControl(catches)
      })
    });
  }
}
