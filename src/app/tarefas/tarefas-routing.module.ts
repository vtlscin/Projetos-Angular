import { Routes, RouterModule } from '@angular/router';

import { ListarTarefasComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';
import { NgModule } from '@angular/core';

import { TarefasRoutingComponent } from './tarefas-routing.component';

export const TarefaRout: Routes = [
    {
        path: 'tarefas',
        component: TarefasRoutingComponent,
        children:[
            {
                path: '',
                component: ListarTarefasComponent
            },
            {
                path: 'cadastrar',
                component: CadastrarTarefasComponent
            },
            {
                path: 'editar/:id',
                component: EditarTarefasComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(TarefaRout)
    ],
    exports: [
        RouterModule
    ]
})
export class TarefasRoutingModule {

}