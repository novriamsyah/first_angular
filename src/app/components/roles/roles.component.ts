import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName : String = "Jhon Doe";

  versionAngular = "Angular 18";

  version : number = 14;

  dateTime : Date = new Date();

  inputType = "checkbox";

  selectedState = "";

  showAlert() {
    alert("Perhatian ini alert !")
  }

  showAlertMsg(msg : String) {
    alert(msg)
  }
}
