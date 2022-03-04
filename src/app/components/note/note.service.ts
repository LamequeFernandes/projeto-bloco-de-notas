import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private snackBar: MatSnackBar) { }

  public showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
    })
  }
}
