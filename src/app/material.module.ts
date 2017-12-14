import {NgModule} from '@angular/core';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTableModule
  ]
})
export class MaterialModule {
}
