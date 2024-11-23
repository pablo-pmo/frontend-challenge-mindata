import { Routes } from '@angular/router';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';

export const routes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'heroes/add/:id', component: AddHeroComponent },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
];
