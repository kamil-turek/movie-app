import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatCardModule,
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
