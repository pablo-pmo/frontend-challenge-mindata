import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [];

  constructor() {}

  addHero(hero: Hero): void {
    this.heroes.push(hero);
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
}