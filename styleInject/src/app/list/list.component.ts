import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @Input()
  shellStyles = {
    'maxHeight': '150px',
    height: '150px'
  };

  ngOnInit() {}
}
