import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MenuComponent, HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    MenuComponent, HeaderComponent
  ]
})
export class ComponentsModule { }
