import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() expanded: boolean;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();

  isOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
    this.modalClosed.emit();
  }
}
