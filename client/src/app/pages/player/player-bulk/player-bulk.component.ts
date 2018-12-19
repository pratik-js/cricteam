import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-bulk',
  templateUrl: './player-bulk.component.html',
  styleUrls: ['./player-bulk.component.scss']
})
export class PlayerBulkComponent implements OnInit {
  playerForms: any;
  playerTypes;

  constructor(private ps: PlayerService, private router: Router) {
    this.playerTypes = ps.getPlayerTypes();
  }

  ngOnInit() {}

  generateForms() {
    const numberOfForm = Number.parseInt(
      document.getElementById('number-of-player')['value'],
      10
    );
    if (!numberOfForm) {
      return;
    }
    const forms = [];
    for (let index = 0; index < numberOfForm; index++) {
      forms.push(this.ps.initForm({}));
    }
    this.playerForms = forms;
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
    const resData: any = await this.ps.insertMany(dataList);
    if (resData.inserted) {
      this.router.navigateByUrl('/admin/player');
    }
  }
}
