import { Component, OnInit } from '@angular/core';
import { TableField } from 'src/app/shared/model/table.model';

@Component({
  selector: 'app-outgoing',
  templateUrl: './outgoing.component.html',
  styleUrls: ['./outgoing.component.scss']
})
export class OutgoingComponent implements OnInit {

  colHeader!: TableField[];
  value!: any[];

  constructor() { }

  ngOnInit(): void {
    this.colHeader = [
      {field: 's.no', header: 'S.No'},
      {field: 'date', header: 'Date'}
    ];
    
    this.value = [
      {
        s_no: 1,
        date: '18/08/2022',
      },
      {
        s_no: 2,
        date: '19/08/2022',
      },
      {
        s_no: 3,
        date: '20/08/2022',
      },
    ]

  }

}
