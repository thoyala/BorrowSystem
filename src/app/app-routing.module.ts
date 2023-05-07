import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperComponent } from './site/developer/developer.component';
import { EquipComponent } from './site/equip/equip.component';
import { SlideComponent } from './site/slide/slide.component';
import { StepComponent } from './site/step/step.component';
import { SiteComponent } from './site/site.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { UserMenuComponent } from './user/user-menu/user-menu.component';
import { EditAdminComponent } from './admin/edit-admin/edit-admin.component';
import { CrudEquipComponent } from './admin/crud-equip/crud-equip.component';
import { CrudUserComponent } from './admin/crud-user/crud-user.component';
import { ApproveEquipComponent } from './admin/approve-equip/approve-equip.component';
import { ReturnEquipComponent } from './admin/return-equip/return-equip.component';
import { ShowBorrowComponent } from './admin/show-borrow/show-borrow.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { BorrowEquipComponent } from './user/borrow-equip/borrow-equip.component';
import { BorrowDetailComponent } from './user/borrow-detail/borrow-detail.component';

const routes: Routes = [
  {path: '' , component: SiteComponent,
    children : [
      {path: '', component: SlideComponent},
      {path: 'equip', component: EquipComponent},
      {path: 'step' , component: StepComponent},
      {path: 'dev' , component: DeveloperComponent}
    ]},
  {path: 'admin',component: AdminMenuComponent,
    children:[
      {path: 'edit-admin', component: EditAdminComponent},
      {path: 'crud-user', component: CrudUserComponent},
      {path: 'crud-equip', component: CrudEquipComponent},
      {path: 'approve-equip', component: ApproveEquipComponent},
      {path: 'return-equip', component: ReturnEquipComponent},
      {path: 'show-borrow', component: ShowBorrowComponent},
    ]
},
  {path: 'user', component: UserMenuComponent,
    children:[
      {path:'borrow-detail',component:BorrowDetailComponent},
      {path: 'borrow-equip',component:BorrowEquipComponent},
      {path: 'edit-user',component:EditUserComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
