import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  showComments() {
    $('.ui.accordion')
      .accordion();
  }

}
