import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggledValue = true;
  @Output() toggleEvent = new EventEmitter<boolean>();

  handleToggle() {
    if (this.toggledValue === undefined){
      this.toggledValue = true;
    }

    this.toggledValue = !this.toggledValue;
    this.toggleEvent.emit(this.toggledValue);
  }

}
