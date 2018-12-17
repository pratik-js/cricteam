import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerService } from '../player.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-player-ae',
  templateUrl: './player-ae.component.html',
  styleUrls: ['./player-ae.component.scss']
})
export class PlayerAeComponent implements OnInit {
  playerForm;
  title;
  buttonTitle;
  constructor(
    private ps: PlayerService,
    public dialogRef: MatDialogRef<PlayerAeComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    if (data.editData) {
      this.buttonTitle = 'Update';
      this.title = 'Edit';
      const { name, price, quantity } = data.editData;
      this.initForm(name, price, quantity);
    } else {
      this.initForm();
      this.buttonTitle = 'Add';
      this.title = 'Add New';
    }
  }

  ngOnInit() {}

  initForm(name = '', price = null, quantity = null) {
    this.playerForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      price: new FormControl(price),
      quantity: new FormControl(quantity)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
    if (this.data.editData) {
      const data = await this.ps.update(
        this.data.editData._id,
        this.playerForm.value
      );
      data && this.dialogRef.close(true);
    } else {
      const data = await this.ps.insert(this.playerForm.value);
      this.dialogRef.close(true);
    }
  }
}
