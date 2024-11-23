import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [
    { id: 1, name: 'batman' },
    { id: 2, name: 'spiderman' },
    { id: 3, name: 'antman' },
    { id: 4, name: 'hulk' },
    { id: 5, name: 'thor' },
    { id: 6, name: 'ironman' },
  ];

  constructor() {}

  addHero(name: string): void {
    this.heroes.push({ name, id: this.getNextId() });
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroById(searchingId: number): Hero | undefined {
    return this.heroes.find(({ id }): boolean => searchingId === id);
  }

  getHeroesByName(searchingName: string): Hero[] {
    return this.heroes.filter(({ name }): boolean =>
      name.includes(searchingName)
    );
  }

  modifyHeroById(searchingId: number, newName: string): void {
    const hero: Hero | undefined = this.heroes.find(
      ({ id }): boolean => searchingId === id
    );
    if (hero === undefined) return;
    hero.name = newName;
  }

  deleteHeroById(searchingId: number): void {
    const index: number = this.heroes.findIndex(
      ({ id }): boolean => searchingId === id
    );
    if (index === -1) return;
    this.heroes.splice(index, 1);
  }

  getNextId(): number {
    if (this.heroes.length === 0) return 1;
    return this.heroes.slice(-1)[0].id + 1;
  }
}
