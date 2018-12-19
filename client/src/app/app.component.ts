import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    { link: '/admin/player', text: 'Player' },
    { link: '/admin/team', text: 'Team' },
    { link: '/admin/playerBulk', text: 'Add Players' }
  ];
}
