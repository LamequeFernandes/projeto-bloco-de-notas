import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';

@Component({
  selector: 'app-note-read',
  templateUrl: './note-read.component.html',
  styleUrls: ['./note-read.component.css']
})
export class NoteReadComponent implements OnInit {

  note!: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.read().subscribe(notes => {
      this.note = notes;
      console.log(notes);
    });
  }

}
