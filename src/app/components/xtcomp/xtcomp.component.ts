import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Terminal } from "xterm";




@Component({
  
  encapsulation: ViewEncapsulation.None,
  selector: 'app-xtcomp',
  templateUrl: './xtcomp.component.html',
  styleUrls: ['./xtcomp.component.css']
  
  
})
export class XtcompComponent implements OnInit {
   public term: Terminal;
   container: HTMLElement;

  constructor() { }

  ngOnInit() {
    
    this.term = new Terminal();
    this.container = document.getElementById('terminal');
    this.term.open(this.container);
    this.term.writeln('Welcome to xterm.js');
  }

}
