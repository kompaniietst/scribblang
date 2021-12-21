import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "src/app/shared/shared.module";
import { ContainerComponent } from "./components/container/container.component";
import { ListComponent } from "./components/container/list/list.component";
import { EntitySubjectService } from "./services/entitySubject.service";
import { EntityTreeService } from "./services/entityTree.service";
import { GetAllEntitiesEffect } from "./store/effects/getAllEntities.effect";
import { reducers } from "./store/reducers";

const routes: Routes = [
    { path: 'system', component: ContainerComponent },
    { path: 'list/:id', component: ListComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('tree', reducers),
        EffectsModule.forFeature([
            GetAllEntitiesEffect
        ]),

        SharedModule
    ],
    declarations: [
        ContainerComponent,
        ListComponent,
    ],
    providers: [
        EntityTreeService,
        EntitySubjectService
    ]
})
export class EntityTreeModule { }