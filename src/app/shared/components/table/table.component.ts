import { Component, Input, OnInit } from '@angular/core';
import { TableField } from '../../model/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() col: TableField[] = [];
  @Input() pValue: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
