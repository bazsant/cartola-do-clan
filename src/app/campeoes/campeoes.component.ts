import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campeoes',
  templateUrl: './campeoes.component.html',
  styleUrls: ['./campeoes.component.css']
})
export class CampeoesComponent implements OnInit {
  
  constructor() { }
  
  campeoes = [
    { ano: 2016, primeiro: 'Almir', segundo: 'Negão'},
    { ano: 2017, primeiro: 'Negão', segundo: 'Gaucho'},
    { ano: 2018, primeiro: 'Negão', segundo: 'Gaucho'},
    { ano: 2019, primeiro: 'Brasil', segundo: 'Gaucho'},
    { ano: 2020, primeiro: 'Negão', segundo: 'Saxa'},
  ];

  ngOnInit(): void {
  }

}
