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
import { AuctionComponent } from './auction/auction.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { PlayerCardComponent } from './player-card/player-card.component';
import { StartComponent } from './start/start.component';

const PAGES = [
  PlayerComponent,
  PageNotFoundComponent,
  TeamComponent,
  PlayerBulkComponent,
  AdminHomeComponent,
  StartComponent
];
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialInUseModule
  ],
  declarations: [
    PAGES,
    PlayerAeComponent,
    TeamAeComponent,
    UploadPhotoComponent,
    AuctionComponent,
    TeamCardComponent,
    AdminNavigationComponent,
    PlayerCardComponent
  ],
  entryComponents: [PlayerAeComponent, TeamAeComponent, UploadPhotoComponent],
  providers: [PlayerService, TeamService],
  exports: [PAGES]
})
export class PagesModule {}
