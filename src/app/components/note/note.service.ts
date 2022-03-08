import { Note } from './note.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseUrl = "http://localhost:3001/notepad";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  public showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
    })
  }

  public create(note: Note): Observable<Note> {
    return this.http.post<Note>(this.baseUrl, note);
  }

  public read(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl);
  }
}
