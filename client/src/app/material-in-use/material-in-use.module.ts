import { NgModule } from '@angular/core';
import {
  MatTabsModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDividerModule
} from '@angular/material';

const MaterialModules = [
  MatButtonModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTabsModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDividerModule
];
@NgModule({
  declarations: [],
  imports: [MaterialModules],
  exports: [MaterialModules]
})
export class MaterialInUseModule {}
