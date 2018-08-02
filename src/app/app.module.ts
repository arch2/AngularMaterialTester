import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '../../node_modules/@angular/forms';
import { MaterialTesterComponent } from './material.tester.component';
import { FieldCheckboxGroup } from './field.checkbox.component';
import { FieldDateTimeRange } from './field.date.time.range.component';
import { QuestionFormComponent } from './question.form.component';
import { LayoutComponent } from './layout.component';
import { FieldDropdownComponent } from './field.dropdown.component';
import { TextboxComponent } from './field.textbox.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialTesterComponent,
    FieldCheckboxGroup,
    FieldDateTimeRange,
    QuestionFormComponent,
    LayoutComponent,
    FieldDropdownComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
