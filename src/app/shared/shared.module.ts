import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PreloaderComponent } from "./modules/preloader/preloader.component";
import { FormComponent } from './modules/form/form.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [PreloaderComponent, FormComponent],
    exports: [PreloaderComponent, FormComponent]
})
export class SharedModule { }