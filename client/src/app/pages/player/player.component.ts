import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { MatDialog } from '@angular/material';
import { PlayerAeComponent } from './player-ae/player-ae.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  dialogTitle;
  dataInfo: any;
  dataList: any;

  displayedColumns: string[] = [
    'name',
    'price',
    'quantity',
    '_id',
    'edit',
    'delete'
  ];

  constructor(private ps: PlayerService, public dialog: MatDialog) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.dataList = null;
    this.dataInfo = {};
    this.ps.list().subscribe(res => {
      this.dataInfo.totalRecord = 50;
      this.dataList = res;
    });
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
      width: '250px',
      data: { editData }
    });

    dialogRef.afterClosed().subscribe(result => {
      result === true && this.list();
    });
  }
}
