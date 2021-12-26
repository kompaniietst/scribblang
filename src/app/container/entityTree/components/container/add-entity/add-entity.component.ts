import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/auth/interfaces/currentUser.interface';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { SystemEntityRequestInterface } from '../../../interfaces/systemEntityRequest.interface';
import { EntitySubjectService } from '../../../services/entitySubject.service';
import { addEntityAction } from '../../../store/actions/addEntity.action';
import { getAllEntitiesAction } from '../../../store/actions/getAllEntities.action';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.scss']
})
export class AddEntityComponent implements OnInit {
  form: FormGroup;
  path: string[] = [];

  constructor(private entitySubject: EntitySubjectService, private store: Store) {
    this.entitySubject.systemEntityPath
      .subscribe((path: string[]) => this.path = path);
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      name: new FormControl(""),
      type: new FormControl("list")
    })
  }

  onSubmit() {
    console.log('form ', this.form.value);

    const request: SystemEntityRequestInterface = {
      ...this.form.value,
      path: this.path,
    }
    console.log('request', request);

    this.store.dispatch(addEntityAction({ request }))


  }
  refresh() {
    this.store.dispatch(getAllEntitiesAction());
  }
}
