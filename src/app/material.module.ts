import {
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { ObserversModule } from '@angular/cdk/observers';
import { PlatformModule } from '@angular/cdk/platform';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatTabsModule,
        MatGridListModule,
        MatToolbarModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatRippleModule,
        ObserversModule,
        PlatformModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatTabsModule,
        MatGridListModule,
        MatToolbarModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatRippleModule,
        ObserversModule,
        PlatformModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule
    ],
})
export class MaterialModule { }