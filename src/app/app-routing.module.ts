import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/core/auth-guard.guard';
import { ChatComponent } from './module/chat/chat.component';

const routes: Routes = [
  {
    path: 'chat',
    canActivate: [AuthGuardGuard],
    component: ChatComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
