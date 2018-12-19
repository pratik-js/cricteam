import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TeamService } from '../team.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-team-ae',
  templateUrl: './team-ae.component.html',
  styleUrls: ['./team-ae.component.scss']
})
export class TeamAeComponent implements OnInit {
  teamForm;
  title;
  buttonTitle;
  constructor(
    private ts: TeamService,
    public dialogRef: MatDialogRef<TeamAeComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    if (data.editData) {
      this.buttonTitle = 'Update';
      this.title = 'Edit';
      const { name, totalPoints } = data.editData;
      this.initForm(name, totalPoints);
    } else {
      this.initForm();
      this.buttonTitle = 'Add';
      this.title = 'Add New';
    }
  }

  ngOnInit() {}

  initForm(name = '', totalPoints = 15000) {
    this.teamForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      totalPoints: new FormControl(totalPoints)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
    if (this.data.editData) {
      const data = await this.ts.update(
        this.data.editData._id,
        this.teamForm.value
      );
      data && this.dialogRef.close(true);
    } else {
      const data = await this.ts.insert(this.teamForm.value);
      this.dialogRef.close(true);
    }
  }
}
