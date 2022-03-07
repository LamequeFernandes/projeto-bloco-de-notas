import { NoteCreateComponent } from './components/note/note-create/note-create.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { NotepadComponent } from './views/notepad/notepad.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "notas",
    component: NotepadComponent
  },
  {
    path: "notas/criar",
    component: NoteCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
