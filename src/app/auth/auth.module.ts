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
import { GetCurrentUserEffect } from "./store/effects/getCurrentUser.effect";
import { LogoutEffect } from "./store/effects/logout.effect";
import { AuthGuard } from "./guards/auth.guard";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
    {
        path: "register", component: RegisterComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "login", component: LoginComponent,
        canActivate: [AuthGuard]
    },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([
            RegisterEffect,
            LoginEffect,
            GetCurrentUserEffect,
            LogoutEffect
        ]),

        SharedModule
    ],
    declarations: [RegisterComponent, LoginComponent],
    providers: [AuthService, PersistanceService, AuthGuard]
})
export class AuthModule { }