import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { Hero } from '../models/hero';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an empty array', () => {
    expect(service.getHeroes()).toHaveSize(0);
  });

  it('should return an array containing the new hero', () => {
    const hero: Hero = {
      id: 1,
      name: 'batman',
    };
    service.addHero(hero);

    const heroes: Hero[] = service.getHeroes();

    expect(heroes).toHaveSize(1);
    expect(heroes[0]).toEqual(hero);
  });

  it('should return the two new heroes', () => {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'batman',
      },
      {
        id: 2,
        name: 'spiderman',
      },
    ];
    heroes.forEach((hero: Hero) => service.addHero(hero));

    const output: Hero[] = service.getHeroes();

    expect(output).toHaveSize(2);
    expect(output[0]).toEqual(heroes[0]);
    expect(output[1]).toEqual(heroes[1]);
  });

  it('should return the hero of the given id', () => {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'batman',
      },
      {
        id: 2,
        name: 'spiderman',
      },
    ];
    heroes.forEach((hero: Hero) => service.addHero(hero));

    expect(service.getHeroById(2)).toEqual(heroes[1]);
  });

  it('should return undefined when there is no hero with given id', () => {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'batman',
      },
      {
        id: 2,
        name: 'spiderman',
      },
    ];
    heroes.forEach((hero: Hero) => service.addHero(hero));

    expect(service.getHeroById(3)).toBeUndefined();
  });

  it('should return the two heroes named man', () => {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'batman',
      },
      {
        id: 2,
        name: 'thor',
      },
      {
        id: 3,
        name: 'hulk',
      },
      {
        id: 4,
        name: 'spiderman',
      },
    ];
    heroes.forEach((hero: Hero) => service.addHero(hero));

    const output: Hero[] = service.getHeroesByName('man');

    expect(output).toHaveSize(2);
    expect(output[0]).toEqual(heroes[0]);
    expect(output[1]).toEqual(heroes[3]);
  });

  it('should return an empty array when name is not present in any of them', () => {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'batman',
      },
      {
        id: 2,
        name: 'thor',
      },
      {
        id: 3,
        name: 'hulk',
      },
      {
        id: 4,
        name: 'spiderman',
      },
    ];
    heroes.forEach((hero: Hero) => service.addHero(hero));

    const output: Hero[] = service.getHeroesByName('mister');

    expect(output).toHaveSize(0);
  });

  it('should modify the hero of the given id', () => {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'batman',
      },
      {
        id: 2,
        name: 'spiderman',
      },
    ];
    heroes.forEach((hero: Hero) => service.addHero(hero));

    const modifiedId: number = 2;
    const newName: string = 'antman';

    service.modifyHeroById(modifiedId, newName);

    expect(service.getHeroById(modifiedId)?.name).toBe(newName);
  });

  it('should modify nothing when no hero has given id', () => {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'batman',
      },
      {
        id: 2,
        name: 'spiderman',
      },
    ];
    heroes.forEach((hero: Hero) => service.addHero(hero));

    const modifiedId: number = 3;
    const newName: string = 'antman';

    service.modifyHeroById(modifiedId, newName);

    const output: Hero[] = service.getHeroes();

    expect(output.some(({ name }) => name === newName)).toBeFalse();
  });

  it('should delete the hero of the given id', () => {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'batman',
      },
      {
        id: 2,
        name: 'thor',
      },
      {
        id: 3,
        name: 'hulk',
      },
      {
        id: 4,
        name: 'spiderman',
      },
    ];
    heroes.forEach((hero: Hero) => service.addHero(hero));

    service.deleteHeroById(2);

    const output: Hero[] = service.getHeroes();

    expect(output).toHaveSize(3);
    expect(output.some(({ name }) => name === 'thor')).toBeFalse();
  });

  it('should delete nothing when no hero has given id', () => {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'batman',
      },
      {
        id: 2,
        name: 'thor',
      },
      {
        id: 3,
        name: 'hulk',
      },
      {
        id: 4,
        name: 'spiderman',
      },
    ];
    heroes.forEach((hero: Hero) => service.addHero(hero));

    service.deleteHeroById(5);

    const output: Hero[] = service.getHeroes();

    expect(output).toHaveSize(4);
  });
});
