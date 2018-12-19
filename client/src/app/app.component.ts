import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    { link: 'player', text: 'Player' },
    { link: 'team', text: 'Team' },
    { link: 'playerBulk', text: 'Add Players' }
  ];
}
