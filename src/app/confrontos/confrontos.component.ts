import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confrontos',
  templateUrl: './confrontos.component.html',
  styleUrls: ['./confrontos.component.css']
})
export class ConfrontosComponent implements OnInit {

  constructor() { }

  confrontos = [
    { rodada: 9, jogadores: [
      { jogador1: 'Ytallo', jogador2: 'Evandson'}, 
      { jogador1: 'Tadeu', jogador2: 'Fefe'},
      { jogador1: 'Rodrigo', jogador2: 'Jhones'},
      { jogador1: 'Natan', jogador2: 'Gaucho'},
      { jogador1: 'Lucas', jogador2: 'Feba'},
    ], folga: 'Carlos'},

    { rodada: 12, jogadores: [
      { jogador1: 'Evandson', jogador2: 'Lucas'}, 
      { jogador1: 'Gaucho', jogador2: 'Ytallo'},
      { jogador1: 'Natan', jogador2: 'Fefe'},
      { jogador1: 'Rodrigo', jogador2: 'Feba'},
      { jogador1: 'Tadeu', jogador2: 'Carlos'},
    ], folga: 'Jhones'},

    { rodada: 15, jogadores: [
      { jogador1: 'Tadeu', jogador2: 'Jhones'}, 
      { jogador1: 'Feba', jogador2: 'Natan'},
      { jogador1: 'Fefe', jogador2: 'Ytallo'},
      { jogador1: 'Carlos', jogador2: 'Rodrigo'},
      { jogador1: 'Evandson', jogador2: 'Gaucho'},
    ], folga: 'Lucas'},

    { rodada: 18, jogadores: [
      { jogador1: 'Fefe', jogador2: 'Evandson'}, 
      { jogador1: 'Natan', jogador2: 'Tadeu'},
      { jogador1: 'Feba', jogador2: 'Gaucho'},
      { jogador1: 'Carlos', jogador2: 'Ytallo'},
      { jogador1: 'Lucas', jogador2: 'Jhones'},
    ], folga: 'Rodrigo'},

    { rodada: 21, jogadores: [
      { jogador1: 'A fazer...', jogador2: 'A fazer...'}, 
      { jogador1: 'A fazer...', jogador2: 'A fazer...'},
      { jogador1: 'A fazer...', jogador2: 'A fazer...'},
      { jogador1: 'A fazer...', jogador2: 'A fazer...'},
      { jogador1: 'A fazer...', jogador2: 'A fazer...'},
    ], folga: 'A fazer...'},
  ]

  ngOnInit(): void {
  }

}
