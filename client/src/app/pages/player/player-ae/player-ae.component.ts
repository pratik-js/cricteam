import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerService } from '../player.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TeamService } from '../../team/team.service';

@Component({
  selector: 'app-player-ae',
  templateUrl: './player-ae.component.html',
  styleUrls: ['./player-ae.component.scss']
})
export class PlayerAeComponent implements OnInit {
  playerForm;
  title;
  buttonTitle;
  playerTypes;
  teamNames;

  constructor(
    private ps: PlayerService,
    public dialogRef: MatDialogRef<PlayerAeComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private ts: TeamService
  ) {}

  ngOnInit() {
    this.teamNames = this.ts.getTeamNames();
    this.playerTypes = this.ps.getPlayerTypes();
    if (this.data.editData) {
      this.buttonTitle = 'Update';
      this.title = 'Edit';
      this.playerForm = this.ps.initForm(this.data.editData);
    } else {
      this.playerForm = this.ps.initForm({});
      this.buttonTitle = 'Add';
      this.title = 'Add New';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
    const data = this.playerForm.value;
    if (data.isNew) {
      data.records = null;
    }
    if (data.point > 0) {
      data.sold = true;
    }
    if (this.data.editData) {
      const resData = await this.ps.update(this.data.editData._id, data);
      resData && this.dialogRef.close(true);
    } else {
      const resData = await this.ps.insert(data);
      resData && this.dialogRef.close(true);
    }
  }
}
