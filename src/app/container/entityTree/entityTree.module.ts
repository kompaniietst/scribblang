import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ContainerComponent } from "./components/container/container.component";
import { EntityTreeService } from "./services/entityTree.service";
import { GetAllEntitiesEffect } from "./store/effects/getAllEntities.effect";
import { reducers } from "./store/reducers";

const routes: Routes = [
    { path: 'system', component: ContainerComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('tree', reducers),
        EffectsModule.forFeature([
            GetAllEntitiesEffect
        ])
    ],
    declarations: [
        ContainerComponent
    ],
    providers: [
        EntityTreeService
    ]
})
export class EntityTreeModule { }