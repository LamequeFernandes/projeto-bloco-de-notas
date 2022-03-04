import { Router } from '@angular/router';
import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
  }

  public createNote(): void {
    this.noteService.showMessage("Nota criada com sucesso!");
    this.router.navigate(['/']);
  }

  public cancelNote(): void {
    this.noteService.showMessage("Nota cancelada!")
    this.router.navigate(['/']);
  }

}
