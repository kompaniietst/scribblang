import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backendErrors.interface';
import { SystemEntityInterface } from '../../../interfaces/systemEntity.interface';
import { EntitySubjectService } from '../../../services/entitySubject.service';
import { deleteEntityAction } from '../../../store/actions/deleteEntity.action';
import { getAllEntitiesAction } from '../../../store/actions/getAllEntities.action';
import { isLoadingSelector, treeErrorsSelector, treeSelector } from '../../../store/selectors';

@Component({
  selector: 'app-system-view',
  templateUrl: './system-view.component.html',
  styleUrls: ['./system-view.component.scss']
})
export class SystemViewComponent implements OnInit {
  activeItemId: string;
  systemEntites$: Observable<SystemEntityInterface[]>;
  errors$: Observable<BackendErrorsInterface>;
  isLoading$: Observable<boolean>;
  openedDirectoriesIds: string[] = [];
  path = [];
  children: [];

  constructor(
    private store: Store,
    private router: Router,
    private entitySubjectService: EntitySubjectService) { }

  ngOnInit() {
    this.store.dispatch(getAllEntitiesAction());

    this.systemEntites$ = this.store.select(treeSelector)
      .pipe(tap((entities: any) => {
      }));

    this.isLoading$ = this.store.pipe(
      select(isLoadingSelector))

    this.entitySubjectService.systemEntityPath.subscribe(x => console.log('path: ', x))
  }

  definePath(item: SystemEntityInterface) {
    const newPath = [...item.path, item.name]
    this.entitySubjectService.systemEntityPath.next(newPath);
  }

  removeFromPath(item: string) {
    const i = this.path.indexOf(item);
    this.path.length = i + 1;
  }

  toggleEntity = (entity: SystemEntityInterface) => {
    if (entity.type === 'list') {
      this.router.navigate(["list/" + entity._id]);
    }

    this.isDirectoryOpen(entity._id)
      ? this.closeDirectory(entity._id)
      : this.openDirectory(entity._id);
  }

  isDirectoryOpen = (id: string) =>
    this.openedDirectoriesIds.includes(id);

  openDirectory = (id: string) =>
    this.openedDirectoriesIds.push(id);


  closeDirectory(id: string) {
    const index = this.openedDirectoriesIds.indexOf(id);

    this.openedDirectoriesIds.splice(index, 1);
  }

  removeEntity(id: string) {
    this.store.dispatch(deleteEntityAction({ id }))
  }

  updateEntity(id: string) {
    this.router.navigate([`system/${id}`]);
  }

  isDirectoryOpened = (entity: SystemEntityInterface) =>
    this.openedDirectoriesIds.includes(entity._id);

  isDirectoryFilledClosed = (entity: SystemEntityInterface) =>
    !this.openedDirectoriesIds.includes(entity._id) && entity.children.length > 0

  isDirectoryFilledOpened = (entity: SystemEntityInterface) =>
    this.openedDirectoriesIds.includes(entity._id) && entity.children.length > 0

  isDirectoryEmptyClosed = (entity: SystemEntityInterface) =>
    !this.openedDirectoriesIds.includes(entity._id) && entity.children.length === 0

  isDirectoryEmptyOpened = (entity: SystemEntityInterface) =>
    this.openedDirectoriesIds.includes(entity._id) && entity.children.length === 0
}
