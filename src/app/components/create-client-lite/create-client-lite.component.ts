import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MockCustomerLite } from '../../Interfaces/MockCustomer';
import { RouterModule } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-create-client-lite',
  standalone: true,
  imports: [ 
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './create-client-lite.component.html',
  styleUrl: './create-client-lite.component.css'
})
export class CreateClientLiteComponent {

  cliente : MockCustomerLite = {
    cpf: 0,
    nome: '',
    nascimento: 0,
    telefone: 0,
    conta: '',
    agente: '',
    loja: '',
    criacao: '',
    dataCriacao: ''
  }

  submitForm(clientform: any){
    if(clientform.valid){
      console.log('Form Data:', this.cliente)
    }
  }

}
