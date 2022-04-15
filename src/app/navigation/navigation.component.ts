import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public currentMode: number=1;
  constructor() { }

  ngOnInit(): void {
  }
  public SwitchMode(mode: number) {
    this.currentMode = mode;

  }
}
