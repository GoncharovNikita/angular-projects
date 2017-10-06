import { Component, OnInit } from '@angular/core';

import { IHero, Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
    selector:    'app-hero-list',
    templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
    heroes: Array<IHero>;
    constructor(private heroService: HeroService) {}

    async ngOnInit() {
        const heroes = await this.heroService.getHeroes();
        this.heroes  = heroes;
    }
}
