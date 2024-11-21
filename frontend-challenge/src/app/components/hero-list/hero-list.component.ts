import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-list',
  imports: [MatTableModule],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss',
})
export class HeroListComponent {
  public heroes: Hero[] = [];

  public columnsToDisplay: string[] = ['id', 'name'];

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }
}
