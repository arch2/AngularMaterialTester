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
import { ObserversModule } from '../../node_modules/@angular/cdk/observers';
import { PlatformModule } from '../../node_modules/@angular/cdk/platform';

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