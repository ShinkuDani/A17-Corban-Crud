import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customerInterface } from '../Interfaces/customerInterface';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {

  constructor(private http: HttpClient) { }

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
      name: 'none'
    }
   };

   customers: customerInterface[] = [
    {
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
     name: 'none'
   }
    }
   ];

  tokens = {
    'nome': 'Token'
  }

  headers = new HttpHeaders({
    'autorizathion': `bearer ${this.tokens.nome}`
  })

  //Pegando todos Customers
  getCustomers(){
    this.http.get('api4.ajin.io/v2/customers', {
      headers: this.headers
    })
      .subscribe( data => {
        this.customers.push(data as customerInterface)
      });
  }

  //Pegando um Customer
  getCustomer(id: number){
    this.http.get(`api4.ajin.io/v2/customers/${id}`, {
      headers: this.headers
    })
      .subscribe( data => {
        this.customer = data as customerInterface;
      });
  }

  //Salvando Novo Customer
  postCustomer(id: number){
    this.http.post(`api4.ajin.io/v2/customers`, {
      headers: this.headers
    })
      .subscribe( data => {
        console.log(`Cliente Cadastrado, Response: ${data}`)
      });
  }

  

  //Salvando Novo Customer
  putCustomer(id: number){
    this.http.get(`api4.ajin.io/v2/customers/${id}`, {
      headers: this.headers
    })
      .subscribe( data => {
        this.customer = data as customerInterface;
      });
  }

  //Desletando customer
  deleteCustomer(id: number){
    this.http.delete(`api4.ajin.io/v2/customers/${id}`, {
      headers: this.headers
    })
      .subscribe( data => {
        console.log('Usuário Deletado.')
      });
  }
}
