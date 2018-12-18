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
  MatCardModule,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS
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
  MatCardModule,
  MatSnackBarModule
];
@NgModule({
  declarations: [],
  imports: [MaterialModules],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 4000,
        verticalPosition: 'top',
        panelClass: ['custom-snackbar']
      }
    }
  ],
  exports: [MaterialModules]
})
export class MaterialInUseModule {}
