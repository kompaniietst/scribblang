import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllEntitiesAction } from '../../store/actions/getAllEntities.action';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getAllEntitiesAction());
  }

}
