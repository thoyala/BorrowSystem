import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './site/navbar/navbar.component';
import { SlideComponent } from './site/slide/slide.component';
import { FooterComponent } from './site/footer/footer.component';
import { LoginComponent } from './site/login/login.component';
import { RegisterComponent } from './site/register/register.component';
import { EquipComponent } from './site/equip/equip.component';
import { StepComponent } from './site/step/step.component';
import { DeveloperComponent } from './site/developer/developer.component';
import { SiteComponent } from './site/site.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { UserMenuComponent } from './user/user-menu/user-menu.component';
import { EditAdminComponent } from './admin/edit-admin/edit-admin.component';
import { CrudUserComponent } from './admin/crud-user/crud-user.component';
import { CrudEquipComponent } from './admin/crud-equip/crud-equip.component';
import { ApproveEquipComponent } from './admin/approve-equip/approve-equip.component';
import { ReturnEquipComponent } from './admin/return-equip/return-equip.component';
import { ShowBorrowComponent } from './admin/show-borrow/show-borrow.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    EquipComponent,
    StepComponent,
    DeveloperComponent,
    SiteComponent,
    AdminMenuComponent,
    UserMenuComponent,
    EditAdminComponent,
    CrudUserComponent,
    CrudEquipComponent,
    ApproveEquipComponent,
    ReturnEquipComponent,
    ShowBorrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
