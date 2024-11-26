import { Routes } from '@angular/router';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { EditHeroComponent } from './pages/edit-hero/edit-hero.component';

export const routes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'heroes/add/:id', component: AddHeroComponent },
  { path: 'heroes/edit/:id', component: EditHeroComponent },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
];
