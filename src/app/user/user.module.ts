import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {GamesPageComponent} from './games-page/games-page.component';
import {FriendsPageComponent} from './friends-page/friends-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {SharedModule} from '../shared/shared.module';
import {AuthGuard} from './shared/services/auth.guard';
import {SearchPipe} from './shared/search.pipe';
import { AlertComponent } from './shared/components/alert/alert.component';
import {AlertService} from './shared/services/alert.service';
import {PostPageComponent} from '../post-page/post-page.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    LoginPageComponent,
    GamesPageComponent,
    FriendsPageComponent,
    EditPageComponent,
    SearchPipe,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: UserLayoutComponent, children: [
          {path: '', redirectTo: '/user/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'games', component: GamesPageComponent, canActivate: [AuthGuard]},
          {path: 'fiends', component: FriendsPageComponent, canActivate: [AuthGuard]},
          {path: 'post/:id/', component: PostPageComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AlertService]
})
export class UserModule {

}
