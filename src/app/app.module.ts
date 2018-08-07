import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MaterialTesterComponent } from './material.tester.component';
import { FieldCheckbox } from './field.checkbox.component';
import { FieldDateTimeRange } from './field.date.time.range.component';
import { QuestionFormComponent } from './form.question.component';
import { LayoutComponent } from './layout.component';
import { FieldDropdownComponent } from './field.dropdown.component';
import { TextboxComponent } from './field.textbox.component';
import { FieldDateTimePicker } from './field.date.time.picker.component';
import { SectionFormComponent } from './form.section.component';
import { CardFormComponent } from './form.card.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialTesterComponent,
    FieldCheckbox,
    FieldDateTimeRange,
    QuestionFormComponent,
    LayoutComponent,
    FieldDropdownComponent,
    TextboxComponent,
    FieldDateTimePicker,
    SectionFormComponent,
    CardFormComponent
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
