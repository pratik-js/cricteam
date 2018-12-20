import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from '../team/team.service';
import { PlayerService } from '../player/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  @Input() playerIds;
  teamList = null;
  teamPoints = null;
  teamNames;
  playerTypes;
  currentPlayer;
  currentTeamId = 0;
  playerForm;
  playerId = '5c19d0a99438fe71e0fe3306';

  constructor(
    private ps: PlayerService,
    private ts: TeamService,
    private router: Router
  ) {
    this.nextPlayer();
  }

  ngOnInit() {
    this.teamNames = this.ts.getTeamNames();
    this.playerTypes = this.ps.getPlayerTypes();
    this.getTeamList();
    this.initForm();
  }

  async getTeamList() {
    this.teamList = null;
    this.teamPoints = await this.ps.getPointForTeam();
    this.teamList = await this.ts.list();
  }

  async initForm() {
    this.currentPlayer = await this.ps.getPlayerById(this.playerId);
    this.playerForm = this.ps.initForm(this.currentPlayer);
    this.playerForm.valueChanges.subscribe(() => {
      const teamId = this.playerForm.controls['teamId'].value;
      if (teamId) {
        this.currentTeamId = teamId;
      }
    });
  }

  addPoint(teamId, point) {
    const currentPoint = this.playerForm.value.point;
    this.playerForm.patchValue({
      point: currentPoint + point,
      teamId: teamId
    });
  }

  async onSubmit() {
    const data = this.playerForm.value;
    if (data.isNew) {
      data.records = null;
    }
    data.sold = true;
    const resData: any = await this.ps.update(this.currentPlayer._id, data);
    resData && resData.updated && this.playerIds.shift();
    this.nextPlayer();
  }

  async nextPlayer() {
    if (!this.playerIds.length) {
      this.router.navigateByUrl('/admin');
    }
    this.playerId = this.playerIds[0];
  }
}
