import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableField } from '../../model/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() cols: TableField[] = [];
  @Input() pValues: any = [];
  @Output() emitOnAdd = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.emitOnAdd.emit();
  }

}
