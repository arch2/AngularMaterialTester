import { MatButtonModule, MatCheckboxModule, MatCardModule, MatTabsModule, MatGridListModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatTabsModule, MatGridListModule, MatToolbarModule, MatSidenavModule],
    exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatTabsModule, MatGridListModule, MatToolbarModule, MatSidenavModule],
})
export class MaterialModule { }