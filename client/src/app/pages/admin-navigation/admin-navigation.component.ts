import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {
  links = [
    { link: '/admin', text: 'Home' },
    { link: '/admin/player', text: 'Player' },
    { link: '/admin/team', text: 'Team' },
    { link: '/admin/playerBulk', text: 'Add Players' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
