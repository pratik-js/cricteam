import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './pages/player/player.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TeamComponent } from './pages/team/team.component';
import { PlayerBulkComponent } from './pages/player/player-bulk/player-bulk.component';
import { TeamResolverService } from './pages/team/team-resolver.service';

import { StartComponent } from './pages/start/start.component';

const resolve = {
  teamData: TeamResolverService
};

const admin = [
  {
    path: 'player',
    component: PlayerComponent
  },
  { path: 'team', component: TeamComponent },
  { path: 'playerBulk', component: PlayerBulkComponent },
  { path: '', component: StartComponent }
];

const routes: Routes = [
  { path: 'admin', resolve, children: admin },
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
