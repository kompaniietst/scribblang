import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "src/app/shared/shared.module";
import { SystemViewComponent } from "./components/container/system-view/system-view.component";
import { ListComponent } from "./components/container/list/list.component";
import { EntitySubjectService } from "./services/entitySubject.service";
import { EntityTreeService } from "./services/entityTree.service";
import { GetAllEntitiesEffect } from "./store/effects/getAllEntities.effect";
import { treeReducers } from "./store/treeReducers";
import { AddEntityComponent } from "./components/container/add-entity/add-entity.component";
import { entityReducers } from "./store/entityReducers";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddEntityEffect } from "./store/effects/addEntity.effect";
import { UIModule } from "src/app/ui/ui.module";
import { DeleteEntityEffect } from "./store/effects/deleteEntity.effect";
import { UpdateEntityEffect } from "./store/effects/updateEntity.effect";

const routes: Routes = [
    { path: 'system', component: SystemViewComponent },
    { path: 'system/:id', component: SystemViewComponent },
    { path: "add", component: AddEntityComponent },
    { path: 'list/:id', component: ListComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('tree', treeReducers),
        StoreModule.forFeature('entity', entityReducers),
        EffectsModule.forFeature([
            GetAllEntitiesEffect,
            AddEntityEffect,
            UpdateEntityEffect,
            DeleteEntityEffect
        ]),
        ReactiveFormsModule,
        FormsModule,

        SharedModule,
        UIModule
    ],
    declarations: [
        SystemViewComponent,
        ListComponent,
        AddEntityComponent
    ],
    providers: [
        EntityTreeService,
        EntitySubjectService
    ]
})
export class EntityTreeModule { }