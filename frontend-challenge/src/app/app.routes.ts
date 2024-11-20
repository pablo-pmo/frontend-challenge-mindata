import { Routes } from '@angular/router';
import { HeroListComponent } from './components/hero-list/hero-list.component';

export const routes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
];
