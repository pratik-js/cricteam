import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './pages/player/player.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TeamComponent } from './pages/team/team.component';
import { PlayerBulkComponent } from './pages/player/player-bulk/player-bulk.component';

const routes: Routes = [
  { path: 'player', component: PlayerComponent },
  { path: 'team', component: TeamComponent },
  { path: 'playerBulk', component: PlayerBulkComponent },
  { path: '', pathMatch: 'full', redirectTo: '/player' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
