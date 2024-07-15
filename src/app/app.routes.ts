import { Routes } from '@angular/router'
import { TelaListaClientesComponent } from './components/tela-lista-clientes/tela-lista-clientes.component';
import { CreateClientComponent } from './components/create-client/create-client.component';

export const routes: Routes = [
    {
        path: '',
        component: TelaListaClientesComponent
    },
    {
        path: 'cadastro',
        component: CreateClientComponent
    }
];
