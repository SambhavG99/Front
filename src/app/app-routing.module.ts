import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymsComponent } from './gyms/gyms.component';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { JoinComponent } from './join/join.component';
import { MembershipComponent } from './membership/membership.component';
import { ChoiceComponent } from './choice/choice.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { AloginComponent } from './alogin/alogin.component';

const routes: Routes = [
 {path:'home',component:HomeComponent}, 
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'gyms',component:GymsComponent},
 {path:'binding',component:BindingComponent},
 {path:'join',component:JoinComponent},
 {path:'membership',component:MembershipComponent},
 {path:'choice',component:ChoiceComponent},
 {path:'login',component:LoginComponent},
 {path:'alogin',component:AloginComponent},
 {path:'view',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
