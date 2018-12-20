import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  playerTypes;
  playerIds = null;
  constructor(private ps: PlayerService) {
    this.playerTypes = this.ps.getPlayerTypes();
  }

  ngOnInit() {}

  async loadPlayers(event) {
    const data= await this.ps.getByType(event.source.value)
        
  }
}
