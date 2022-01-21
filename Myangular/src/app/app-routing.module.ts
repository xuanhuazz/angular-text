import { NgModule } from '@angular/core';
//引入路由
import { RouterModule,Routes } from '@angular/router';
//引入组件HomeComponent
import { HomeComponent } from './home/home.component';
//引入组件SchoolComponent
import { SchoolComponent } from './school/school.component';
//引入组件Home-detail
import { HomeDetailComponent } from './home-detail/home-detail.component';
//定义路由
const routes:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },//设置默认路由
  {path:'home',component:HomeComponent},
  {path:'school',component:SchoolComponent},
  {path:'detail/:id',component:HomeDetailComponent},

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
