import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { Store, StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { RegisterEffect } from "./store/effects/register.effect";
import { PersistanceService } from "./services/persistance.service";
import { LoginEffect } from "./store/effects/login.effect";

const routes: Routes = [
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([RegisterEffect, LoginEffect])
    ],
    declarations: [RegisterComponent, LoginComponent],
    providers: [AuthService, PersistanceService]
})
export class AuthModule { }