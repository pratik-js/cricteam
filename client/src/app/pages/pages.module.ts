import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialInUseModule } from '../material-in-use/material-in-use.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerComponent } from './player/player.component';
import { PlayerAeComponent } from './player/player-ae/player-ae.component';
import { PlayerService } from './player/player.service';
import { TeamComponent } from './team/team.component';
import { TeamAeComponent } from './team/team-ae/team-ae.component';
import { TeamService } from './team/team.service';
import { PlayerBulkComponent } from './player/player-bulk/player-bulk.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';

const PAGES = [
  PlayerComponent,
  PageNotFoundComponent,
  TeamComponent,
  PlayerBulkComponent
];
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialInUseModule],
  declarations: [
    PAGES,
    PlayerAeComponent,
    TeamAeComponent,
    UploadPhotoComponent
  ],
  entryComponents: [PlayerAeComponent, TeamAeComponent, UploadPhotoComponent],
  providers: [PlayerService, TeamService],
  exports: [PAGES]
})
export class PagesModule {}
