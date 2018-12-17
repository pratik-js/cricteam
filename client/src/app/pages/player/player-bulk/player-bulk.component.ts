import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-bulk',
  templateUrl: './player-bulk.component.html',
  styleUrls: ['./player-bulk.component.scss']
})
export class PlayerBulkComponent implements OnInit {
  playerForms: any;
  playerTypes;

  constructor(private ps: PlayerService) {
    this.playerTypes = ps.getPlayerTypes();
  }

  ngOnInit() {}

  generateForms() {
    const numberOfForm = parseInt(
      document.getElementById('number-of-player')['value']
    );
    if (!numberOfForm) {
      return;
    }
    const forms = [];
    for (let index = 0; index < numberOfForm; index++) {
      forms.push(this.initForm({}));
    }
    this.playerForms = forms;
  }

  initForm({
    name = '',
    playerTypeId = 1,
    isNew = false,
    match = null,
    runs = null,
    wickets = null,
    catches = null
  }) {
    return new FormGroup({
      name: new FormControl(name, Validators.required),
      playerTypeId: new FormControl(playerTypeId),
      isNew: new FormControl(isNew),
      records: new FormGroup({
        match: new FormControl(match),
        runs: new FormControl(runs),
        wickets: new FormControl(wickets),
        catches: new FormControl(catches)
      })
    });
  }

  async onSubmit() {
    const dataList = [];
    for (let index = 0, data; index < this.playerForms.length; index++) {
      data = { ...this.playerForms[index].value };
      if (data.isNew) {
        data.records = null;
      }
      dataList.push(data);
    }
    console.log(dataList);
    // const data = await this.ps.insert(dataList);
  }
}
