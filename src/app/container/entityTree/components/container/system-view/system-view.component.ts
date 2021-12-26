import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  activeItem: string;
  //   systemEntites$: Observable<SystemEntityInterface[]>;
  //   errors$: Observable<BackendErrorsInterface>;
  //   isLoading$: Observable<boolean>;
  //   path = [];
  //   children;

  //   constructor(private store: Store, private router: Router, private entitySubjectService: EntitySubjectService) { }

  //   ngOnInit(): void {
  //     this.store.dispatch(getAllEntitiesAction());
  //     // this.store.select(treeSelector)
  //     //   .subscribe(x => console.log("X", x));

  //     this.systemEntites$ = this.store.select(treeSelector)
  //       .pipe(tap((entities: any) => {
  //         console.log("entities", entities)
  //         if (entities)
  //           this.children = entities.children.map(c => c.name); console.log(this.children);
  //       }));

  //     this.errors$ = this.store.select(treeErrorsSelector);

  //     this.isLoading$ = this.store.select(isLoadingSelector);
  //   }



  //   checkEntity(name: string, path: string[], item) {
  //     console.log(' ');

  //     // console.log(name);
  //     // console.log(path);
  //     // console.log(item);

  //     console.log(' ');
  //     // this.path = path ? this.path + path[];
  //     // console.log('K=', k);
  //     // this.clicked = name;

  //     if (item.type.name === 'list') {
  //       this.router.navigate(["list/" + item._id]);
  //     }

  //     this.path = path;

  //     console.log('ITEM: ', item, item.children.map(c => c.name));
  //     this.children = item.children.map(c => c.name);
  //     // console.log('path', this.path);
  //     // this.path = path ? [...path] : [];

  //     this.path = [...path, item.name]
  //     // .push(item.name);
  //     // // console.log('PATH ', this.path);
  //     this.entitySubjectService.systemEntityPath.next(this.path);

  //   }

  //   switchHidden(item, prop) {
  //     console.log('item',item);

  //     return item.hidden = {...item, hidden: prop}
  //   }

  // }







  //   systemEntites$: Observable<SystemEntityInterface[]>;
  //   path: string[] = [];
  //   opened = false;
  //   children;
  //   constructor(
  //     private store: Store,
  //     // private vocabularyService: VocabularyService,
  //     private systemEntityService: EntitySubjectService,
  //     private router: Router
  //   ) { }

  //   ngOnInit() {
  //     this.store.dispatch(getAllEntitiesAction());


  //     // this.store.select(treeSelector)
  //     //   .subscribe(x => console.log('ent ', x));


  //     this.systemEntites$ = this.store.select(treeSelector)
  //       .pipe(

  //         tap((entities: any) => {

  //           console.log('ent ', entities)

  //           if (entities)
  //             this.children = entities.children.map(c => c.name); console.log(this.children);

  //         }));

  //     //     entities.map((entity: SystemEntityInterface) => {
  //     //         return { ...entity, name: entity.name }
  //     //     })
  //   }

  //   checkEntity(name: string, path: string[], item) {
  //     // this.path = path ? this.path + path[];
  //     // console.log('K=', k);
  //     // this.clicked = name;
  //     // item = { ...item }

  //     if (item.type.name === 'list') {
  //       this.router.navigate(["list/" + item._id]);
  //     }

  //     this.path = [];

  //     console.log('ITEM: ', item, item.children.map(c => c.name));
  //     this.children = item.children.map(c => c.name);
  //     // console.log('path', this.path);
  //     // this.path = path ? [...path] : [];

  //     // this.path = Object.assign([], name);
  //     this.path.push(name);
  //     // // console.log('PATH ', this.path);
  //     this.systemEntityService.systemEntityPath.next(this.path);

  //   }
  //   if() {

  //   }
  // }

  systemEntites$: Observable<SystemEntityInterface[]>;
  errors$: Observable<BackendErrorsInterface>;
  isLoading$: Observable<boolean>;
  openedDirectoriesIds: string[] = [];
  path = [];
  children: [];

  constructor(private store: Store, private router: Router, private entitySubjectService: EntitySubjectService) { }


  ngOnInit() {
    this.store.dispatch(getAllEntitiesAction());

    this.systemEntites$ = this.store.select(treeSelector)
      .pipe(tap((entities: any) => {
        console.log("entities", entities)
      }));

    this.isLoading$ = this.store.pipe(
      select(isLoadingSelector))

    this.entitySubjectService.systemEntityPath.subscribe(x => console.log('path: ', x))
  }

  definePath(item: SystemEntityInterface) {
    console.log(' ');

    console.log(item.path);
    const newPath = [...item.path, item.name]
    this.entitySubjectService.systemEntityPath.next(newPath);
  }

  removeFromPath(item: string) {
    const i = this.path.indexOf(item);
    this.path.length = i + 1;


    // const newPath = this.path.splice();
    // return newPath;s
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

  callAddForm() {
    // this.router.navigate(["add"]);
    console.log();

  }

  removeEntity(id: string) {
    console.log('removeEntity');
    
    this.store.dispatch(deleteEntityAction({ id }))
  }

  isDirectoryFilledClosed = (entity: SystemEntityInterface) =>
    !this.openedDirectoriesIds.includes(entity._id) && entity.children.length > 0

  isDirectoryFilledOpened = (entity: SystemEntityInterface) =>
    this.openedDirectoriesIds.includes(entity._id) && entity.children.length > 0

  isDirectoryEmptyClosed = (entity: SystemEntityInterface) =>
    !this.openedDirectoriesIds.includes(entity._id) && entity.children.length === 0

  isDirectoryEmptyOpened = (entity: SystemEntityInterface) =>
    this.openedDirectoriesIds.includes(entity._id) && entity.children.length === 0

}
