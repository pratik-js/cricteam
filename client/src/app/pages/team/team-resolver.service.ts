import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TeamService } from './team.service';

@Injectable({
  providedIn: 'root'
})
export class TeamResolverService implements Resolve<any> {
  constructor(private ts: TeamService) {}

  resolve(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      await this.ts.intiTeamNames();
      resolve(true);
    });
  }
}
