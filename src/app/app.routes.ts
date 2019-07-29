import { Routes } from '@angular/router';
import { PainelComponent } from './components/painel/painel.component';

export const ROUTES: Routes = [
    { path: '', component: PainelComponent },
    { path: 'painel', component: PainelComponent }
];
