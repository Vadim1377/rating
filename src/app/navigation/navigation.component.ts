import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() eventMode = new EventEmitter<number>();
  public currentMode: number = 1;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }
  public SwitchMode(mode: number) {
    this.currentMode = mode;
    this.eventMode.emit(mode);
  }
}
