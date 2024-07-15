import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [MatCheckboxModule, MatGridListModule, MatMenuModule, ReactiveFormsModule, MatIconModule,MatButtonModule,MatToolbarModule, MatSelectModule, MatInputModule, MatFormFieldModule   ],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {

   cliente = {
    nome:'',
    idade: 0
  }

  form!: FormGroup;

  ngOnInit(): void{
    this.form = new FormGroup({
      nome: new FormControl<string>(this.cliente.nome),
      idade: new FormControl<number>(this.cliente.idade),
    });
  }
  onSubmit(){
     this.cliente.nome = this.form.value.nome;
     this.cliente.idade = this.form.value.idade;

    console.log("Cliente NOme: " + this.cliente.nome)
    console.log("Cliente Idade: " + this.cliente.idade)

  }

}
