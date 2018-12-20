import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() element;
  types;
  constructor(private ps: PlayerService) {}

  ngOnInit() {
    this.types = this.ps.getPlayerTypeText();
  }
}
