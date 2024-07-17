import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule } from '@angular/router'
import { HeaderComponent } from "../header/header.component";
import {MatCardModule} from '@angular/material/card';
import { CreateClientComponent } from "../create-client/create-client.component";
import { CustomerServicesService } from '../../services/customer-services.service';
import { customerInterface } from '../../interfaces/customerInterface';

//Table parameters and variables
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  completed: boolean;
}

export interface Joke {
  categories: [],
  created_at: '',
  id: '',
  updated_at: '',
  url: '',
  value: ''
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
  imports: [
    RouterModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    HeaderComponent,
    CreateClientComponent],
  templateUrl: './tela-lista-clientes.component.html',
  styleUrl: './tela-lista-clientes.component.css'
})
export class TelaListaClientesComponent {

  customerServices = inject(CustomerServicesService)

  customer: customerInterface = {
    accountCode: 0,
    customerId: '',
    parentTypeCode: 0,
    parentId: '',
    parentCode: 0,
    parentName: '',
    typeCode: 0,
    typeName: '',
    name: '',
    nickname: '',
    displayValue: '',
    birthDate: '',
    personTypeCode: 0,
    personTypeName: '',
    countryIdentity: '',
    sexTypeCode: 0,
    sexTypeName: '',
    maritalStatusCode: 0,
    maritalStatusName: '',
    weddingDate: '',
    spouseCountryIdentity: '',
    spouseName: '',
    motherName: '',
    fatherName: '',
    educationLevelCode: 0,
    educationLevelName: '',
    homeConditionCode: 0,
    homeConditionName: '',
    homeOccupationDate: '',
    naturalness: '',
    naturalnessState: '',
    nationality: '',
    countryOrigin: '',
    profession: '',
    role: '',
    admissionDate: '',
    grossIncome: 0,
    netIncome: 0,
    otherIncome: 0,
    equityValue: 0,
    paymentDay: 0,
    monthlyBilling: 0,
    annualBilling: 0,
    externalCode: '',
    addresses: [],
    phones: [],
    emails: [],
    sites: [],
    documents: [],
    bankAccounts: [],
    benefits: [],
    fields: [],
    statusCode: 0,
    statusName: '',
    statusDate: '',
    statusColor: '',
    statusNote: '',
    alertCode: 0,
    alertName: '',
    alertDate: '',
    alertColor: '',
    alertNote: '',
    storeId: '',
    brokerId: '',
    campaignId: '',
    originTypeCode: 0,
    originCode: 0,
    inputTypeCode: 0,
    tags: [],
    properties: [],
    score: '',
    leadId: '',
    importId: '',
    note: '',
    draft: false,
    event: {
      code: 0,
      name: ''
    }
  }

  customers: customerInterface[] = [{
    accountCode: 0,
    customerId: '',
    parentTypeCode: 0,
    parentId: '',
    parentCode: 0,
    parentName: '',
    typeCode: 0,
    typeName: '',
    name: '',
    nickname: '',
    displayValue: '',
    birthDate: '',
    personTypeCode: 0,
    personTypeName: '',
    countryIdentity: '',
    sexTypeCode: 0,
    sexTypeName: '',
    maritalStatusCode: 0,
    maritalStatusName: '',
    weddingDate: '',
    spouseCountryIdentity: '',
    spouseName: '',
    motherName: '',
    fatherName: '',
    educationLevelCode: 0,
    educationLevelName: '',
    homeConditionCode: 0,
    homeConditionName: '',
    homeOccupationDate: '',
    naturalness: '',
    naturalnessState: '',
    nationality: '',
    countryOrigin: '',
    profession: '',
    role: '',
    admissionDate: '',
    grossIncome: 0,
    netIncome: 0,
    otherIncome: 0,
    equityValue: 0,
    paymentDay: 0,
    monthlyBilling: 0,
    annualBilling: 0,
    externalCode: '',
    addresses: [],
    phones: [],
    emails: [],
    sites: [],
    documents: [],
    bankAccounts: [],
    benefits: [],
    fields: [],
    statusCode: 0,
    statusName: '',
    statusDate: '',
    statusColor: '',
    statusNote: '',
    alertCode: 0,
    alertName: '',
    alertDate: '',
    alertColor: '',
    alertNote: '',
    storeId: '',
    brokerId: '',
    campaignId: '',
    originTypeCode: 0,
    originCode: 0,
    inputTypeCode: 0,
    tags: [],
    properties: [],
    score: '',
    leadId: '',
    importId: '',
    note: '',
    draft: false,
    event: {
      code: 0,
      name: ''
    }
  }]

  //Pegando Customer One
  getCus(id: number){
    console.log(`Botão de Teste de Serviços Id: ${id}`)
    this.customerServices.getCustomer(1).subscribe((data) => {
      this.customer = data as customerInterface;
      console.log(this.customer)
    })
  }

  //Pegando Customers  
  getCuss(){
    console.log(`Pegando Todos os Clientes com Esse serviço`)
    this.customerServices.getCustomers().subscribe((data) => {
      this.customers = data as customerInterface[];
      console.log(this.customer)
    })
  }

  //Pegando Piada
  getJo(){
    let joke: Joke = {
      categories: [],
      created_at: '',
      id: '',
      updated_at: '',
      url: '',
      value: ''
    } 

    this.customerServices.getJoke().subscribe(data => {
      joke = data as Joke
      console.log(`Joke: ${joke.value}`)
    }) 

  }

  //Pegando Categorias de piadas
  getJokeCategories(){
    let chuckcategories = [];
    this.customerServices.getChuckNorrisJokesCategories().subscribe(data => {
      chuckcategories = data as Array<string>;
      console.log(chuckcategories)
      
    })
  }

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
