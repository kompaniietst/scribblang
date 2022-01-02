import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, flatMap } from 'rxjs/operators';
import { SystemEntityInterface } from '../../../interfaces/systemEntity.interface';
import { SystemEntityRequestInterface } from '../../../interfaces/systemEntityRequest.interface';
import { EntitySubjectService } from '../../../services/entitySubject.service';
import { EntityTreeService } from '../../../services/entityTree.service';
import { addEntityAction, updateEntityAction } from '../../../store/actions/addEntity.action';
import { getAllEntitiesAction } from '../../../store/actions/getAllEntities.action';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.scss']
})
export class AddEntityComponent implements OnInit {
  form: FormGroup;
  editMode: boolean = false;
  id: string;
  path: string[] = [];

  constructor(
    private entitySubject: EntitySubjectService,
    private store: Store, private e: EntityTreeService,
    private route: ActivatedRoute) {

    this.entitySubject.systemEntityPath
      .subscribe((path: string[]) => this.path = path);
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        flatMap((params: any) => {
          const editMode = !!params.id;

          return editMode
            ? this.e.getEntityById(params.id)
            : of();
        }))

      .subscribe((entity: SystemEntityInterface) => {
        console.log('XXX ', entity);

        this.id = entity._id;
        const name = entity.name;
        const type = entity.type;
        this.path = entity.path;

        this.form.patchValue({ name, type });

        this.editMode = true;
      })

    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      name: new FormControl(),
      type: new FormControl()
    });
  }

  onSubmit() {
    const request: SystemEntityRequestInterface = {
      ...this.form.value,
      path: this.path,
    }

    if (this.editMode)
      request["_id"] = this.id;

    this.editMode
      ? this.store.dispatch(updateEntityAction({ request }))
      : this.store.dispatch(addEntityAction({ request }))
  }

  refresh() {
    this.store.dispatch(getAllEntitiesAction());
  }
}
