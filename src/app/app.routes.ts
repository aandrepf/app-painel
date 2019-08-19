import { Routes } from '@angular/router';
import { PainelComponent } from './components/painel/painel.component';
import { InterfaceComponent } from './components/painel/interface/interface.component';
import { PrintComponent } from './components/painel/print/print.component';

export const ROUTES: Routes = [
    { path: '', component: PainelComponent},
    { path: 'painel', component: PainelComponent},
    { path: 'interface', component: InterfaceComponent},
    { path: 'interface/:id', component: InterfaceComponent},
    { path: 'print/botao/:id', component: PrintComponent},
];
