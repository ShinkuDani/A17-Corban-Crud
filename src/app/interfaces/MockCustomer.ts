
export interface MockCustomer {
   tipoPessoa: string
   cpf: number
   nome: string
   nascimento: number
   telefone: number
   email: string
   observacao: string
   cep: number
   endereco: string
   endereco_numero: number
   complemento: string
   bairro: string
   cidade: string
   uf: string
   sexo: string
   nomeMae: string
   nomePai: string
   grauDeInstrucao: string
   naturalidade: string
   estadoNaturalidade: string
   nacionalidade: string
   estadoCivil: string
   tipoDocumento: string
   numero: number
   dataEmissao: string
   orgaoEmissor: string
   ufEmissao: string
   contaBanco: number
   nomeBanco: string
   agenciaBanco: number
   numeroConta: number
   tipoConta: string
   tipoBeneficio: string
   numeroBeneficio: number
   codigoBeneficio: number
   descricaoBeneficio: string
   formaPagamentoBeneficio: string
   valorBeneficio: number
   valorLiquidoBeneficio: number
   dataEmissaoBeneficio: string
   dataInicioBeneficio: string
   emprestimoBeneficio: boolean
   ufEmissaoBeneficio: string
  }

  export interface MockCustomerLite {
    cpf: number
    nome: string
    nascimento: number
    telefone: number
    conta: string
    agente: string
    loja: string
    criacao: string
    dataCriacao: string
   }
  
  export interface Address {
    typeCode: number
    typeName: string
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    zipCode: string
    note: string
    statusCode: number
    statusName: string
  }
  
  export interface Phone {
    typeCode: number
    typeName: string
    countryCode: number
    ddd: number
    number: number
    note: string
    statusCode: number
    statusName: string
    statusDate: string
    statusColor: string
    statusNote: string
    primaryPhone: boolean
  }
  
  export interface Email {
    typeCode: number
    email: string
    note: string
    statusCode: number
  }
  
  export interface Site {
    typeCode: number
    typeName: string
    url: string
    note: string
  }
  
  export interface Document {
    documentId: string
    typeCode: number
    number: string
    category: string
    issuingDate: string
    expirationDate: string
    issuingEntity: string
    issuingState: string
    issuingCountry: string
    securityCode: string
    statusCode: number
    statusNote: string
    files: number
  }
  
  export interface BankAccount {
    bankAccountId: string
    description: string
    typeCode: number
    statusCode: number
    statusNote: string
    bankCode: string
    bankName: string
    branchCode: string
    accountNumber: string
    personTypeCode: number
    countryIdentity: string
    holderName: string
    startDate: string
    note: string
  }
  
  export interface Benefit {
    benefitId: string
    typeCode: number
    number: string
    code: string
    description: string
    value: number
    netValue: number
    marginValue: number
    issuingDate: string
    startDate: string
    loanEligible: boolean
    issuingState: string
    issuingCountry: string
    securityCode: string
    statusCode: number
    statusNote: string
    paymentMethodCode: number
    paymentMethodName: string
    note: string
  }
  
  export interface Field {
    key: string
    label: string
    dataType: string
    value: string
    values: string[]
  }
  
  export interface Tag {
    id: string
    code: number
    name: string
    color: string
    note: string
  }
  
  export interface Property {
    id: string
    type: string
    key: string
    label: string
    value: string
    values: string[]
    display: string
    dataType: string
    properties: string[]
  }
  
  export interface Event {
    code: number
    name: string
  }
  