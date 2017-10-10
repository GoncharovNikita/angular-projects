import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  results;
  searchTerm: string;
  latestSearch = new Subject<string>();
  constructor(private http: Http) {
    this.results = this.latestSearch
    .debounceTime(500)
    .switchMap(
      term => this.http.get(`https://api.github.com/search/repositories?q=${term}&sort=stars&order=desc`)
      .map(res => res.json().items.map(item => item.name))
    );
  }

  newSearch(term: string) {
    this.latestSearch.next(term);
  }
}
