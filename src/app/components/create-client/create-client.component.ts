import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router'
import { MockCustomer } from '../../Interfaces/MockCustomer';


@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatGridListModule,
    MatMenuModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule   ],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {

  //clientForm!: FormGroup;


   cliente:MockCustomer = {
     tipoPessoa: '',
     cpf: 0,
     nome: '',
     nascimento: 0,
     telefone: 0,
     email: '',
     observacao: '',
     cep: 0,
     endereco: '',
     endereco_numero: 0,
     complemento: '',
     bairro: '',
     cidade: '',
     uf: '',
     sexo: '',
     nomeMae: '',
     nomePai: '',
     grauDeInstrucao: '',
     naturalidade: '',
     estadoNaturalidade: '',
     nacionalidade: '',
     estadoCivil: '',
     tipoDocumento: '',
     numeroDocumento: 0,
     dataEmissaoDocumento: '',
     orgaoEmissor: '',
     ufEmissaoDocumento: '',
     contaBanco: 0,
     nomeBanco: '',
     agenciaBanco: 0,
     numeroConta: 0,
     tipoConta: '',
     tipoBeneficio: '',
     numeroBeneficio: 0,
     codigoBeneficio: 0,
     descricaoBeneficio: '',
     formaPagamentoBeneficio: '',
     valorBeneficio: 0,
     valorLiquidoBeneficio: 0,
     dataEmissaoBeneficio: '',
     dataInicioBeneficio: '',
     emprestimoBeneficio: false,
     ufEmissaoBeneficio: ''
   }
  

  onSubmit(){
     console.log('onSubmit Funcionado')
  }

  submitForm(userForm:any){

    if(userForm.valid){
      console.log('Form Data:' , this.cliente)
    }
  }

}
