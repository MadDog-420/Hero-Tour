import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Simp' },
      { id: 12, name: 'El Grando Smokio' },
      { id: 13, name: 'Frozono' },
      { id: 14, name: 'Capitanazo' },
      { id: 15, name: 'The Infraggable Krunk' },
      { id: 16, name: 'RubbishMan' },
      { id: 17, name: 'Dynaguy' },
      { id: 18, name: 'Dr Doctor' },
      { id: 19, name: 'Escamoso' },
      { id: 20, name: 'Bull-E' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
