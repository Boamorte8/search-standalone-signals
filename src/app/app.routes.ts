import { Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
