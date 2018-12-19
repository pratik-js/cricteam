import { Component, OnInit } from '@angular/core';
import { TeamAeComponent } from './team-ae/team-ae.component';
import { TeamService } from './team.service';
import { MatDialog } from '@angular/material';
import { UploadPhotoComponent } from '../upload-photo/upload-photo.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  dataList: any;

  displayedColumns: string[] = [
    'name',
    'price',
    'quantity',
    '_id',
    'edit',
    'delete'
  ];

  constructor(private ts: TeamService, public dialog: MatDialog) {}

  ngOnInit() {
    this.list();
  }

  async list() {
    this.dataList = null;
    this.dataList = await this.ts.list();
  }

  openEdit(teamData) {
    this.openDialog(teamData);
  }
  async deleteById(id) {
    const res = await this.ts.delete(id);
    res && this.list();
  }
  openDialog(editData = null): void {
    const dialogRef = this.dialog.open(TeamAeComponent, {
      width: '300px',
      data: { editData }
    });

    dialogRef.afterClosed().subscribe(result => {
      result === true && this.list();
    });
  }

  uploadPhoto({ name, _id }): void {
    const dialogRef = this.dialog.open(UploadPhotoComponent, {
      width: '400px',
      data: { name, _id, for: 'team' }
    });

    dialogRef.afterClosed().subscribe(result => {
      result === true && this.list();
    });
  }
}
