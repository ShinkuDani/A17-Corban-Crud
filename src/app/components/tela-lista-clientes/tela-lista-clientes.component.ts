import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';


//Table parameters and variables
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  completed: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', completed: false},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', completed: false},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', completed: false},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', completed: false},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', completed: false},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', completed: false},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', completed: false},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', completed: false },
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', completed: false},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', completed: false},
];
// end Table variables



@Component({
  selector: 'app-tela-lista-clientes',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule,MatIconModule,MatButtonModule, MatSidenavModule],
  templateUrl: './tela-lista-clientes.component.html',
  styleUrl: './tela-lista-clientes.component.css'
})
export class TelaListaClientesComponent {


  displayedColumns: string[] = ['CheckBox','position', 'name', 'weight', 'symbol', 'completed'];
  dataSource = ELEMENT_DATA

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.dataSource != null && this.dataSource.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.dataSource == null) {
      return false;
    }
    return this.dataSource.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.dataSource == null) {
      return;
    }
    this.dataSource.forEach(t => (t.completed = completed));
  }

}
