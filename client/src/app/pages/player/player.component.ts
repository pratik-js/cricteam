import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { MatDialog } from '@angular/material';
import { PlayerAeComponent } from './player-ae/player-ae.component';
import { UploadPhotoComponent } from '../upload-photo/upload-photo.component';
import { TeamService } from '../team/team.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  dataList: any;
  playerTypesText;
  teamNames;

  displayedColumns: string[] = [
    'photo',
    'name',
    'playerType',
    'records',
    'point',
    'team',
    'sold',
    'edit',
    'delete'
  ];

  constructor(
    private ps: PlayerService,
    private ts: TeamService,
    public dialog: MatDialog
  ) {
    this.playerTypesText = ps.getPlayerTypeText();
    console.log('player');
    this.teamNames = this.ts.getTeamNames();
  }

  ngOnInit() {
    this.list();
  }

  async list() {
    this.dataList = null;
    this.dataList = await this.ps.list();
  }

  openEdit(playerData) {
    this.openDialog(playerData);
  }
  async deleteById(id) {
    const res = await this.ps.delete(id);
    res && this.list();
  }
  openDialog(editData = null): void {
    const dialogRef = this.dialog.open(PlayerAeComponent, {
      width: '500px',
      data: { editData }
    });

    dialogRef.afterClosed().subscribe(result => {
      result === true && this.list();
    });
  }

  uploadPhoto({ name, _id }): void {
    const dialogRef = this.dialog.open(UploadPhotoComponent, {
      width: '400px',
      data: { name, _id, for: 'player' }
    });

    dialogRef.afterClosed().subscribe(result => {
      result === true && this.list();
    });
  }
}
