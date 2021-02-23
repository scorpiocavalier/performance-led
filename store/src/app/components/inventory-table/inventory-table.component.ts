import { Component, OnInit } from '@angular/core';

export interface LedKit {
  bulbType: string,
  model: string,
  quantity: number
}

const INVENTORY: LedKit[] = [
  { bulbType: 'H1',   model: 'J1', quantity: 1  },
  { bulbType: 'H4',   model: 'J1', quantity: 7  },
  { bulbType: 'H7',   model: 'J1', quantity: 0  },
  { bulbType: 'H11',  model: 'J1', quantity: 15 },
  { bulbType: '9005', model: 'J1', quantity: 0  },
  { bulbType: '9006', model: 'J1', quantity: 7  },
  { bulbType: '881',  model: 'J1', quantity: 1  },
]

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent implements OnInit {
  displayedColumns: string[] = ['bulbType', 'model', 'quantity'];
  dataSource = INVENTORY;

  constructor() { }

  ngOnInit(): void {
  }

}
