import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onMenuChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onMenuChange.emit();
  }

}
