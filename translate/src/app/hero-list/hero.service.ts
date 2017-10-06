import { Injectable } from '@angular/core';
import { Hero, IHero } from './hero';
import { Http } from '@angular/http';

@Injectable()
export class HeroService {

    constructor(private http: Http) {}

    async getHeroes(): Promise<Array<IHero>> {
        const result = Array<IHero>();
        this.http.get('../../assets/data/heroes.json')
            .subscribe(data => {
                Object.values(<IHero>data.json()).forEach(__value => {
                    result.push(__value);
                });
            });

        return result;
    }
}
