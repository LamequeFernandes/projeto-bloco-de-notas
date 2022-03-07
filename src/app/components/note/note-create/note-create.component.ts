import { Note } from './../note.model';
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

  // teste de envio para o db
  nota: Note = {
    name: 'Teste',
    detalhe: 'detalhe de teste'
  }

  public createNote(): void {
    this.noteService.create(this.nota).subscribe(() => {
      this.noteService.showMessage("Nota criada com sucesso!");
      this.router.navigate(['/']);
    })
  }

  public cancelNote(): void {
    this.noteService.showMessage("Nota cancelada!")
    this.router.navigate(['/']);
  }

}
