import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes = [
    'firstNote',
    'secondNote'
  ];


  constructor() { }

  ngOnInit() {
  }

  addNewNote(note: HTMLInputElement) {
    this.notes.push(note.value);
    note.value = "";
  }


// remove button for each item
// Reordering of the notes: arrows up and down
// Possibility to manage notes of several suers
// - user is entering his name
// - he is able to load his names (button Load to show notes for a certain user)
// vsonkin@luxoft.com
// Title: NTT Paul Bordea Day 1

}
