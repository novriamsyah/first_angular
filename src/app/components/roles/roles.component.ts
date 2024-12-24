import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { SelectDropDownModule } from 'ngx-select-dropdown'

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule, SelectDropDownModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  http = inject(HttpClient);
  roleList : IRole[] = [];
  selectedRole: IRole | null = null;

  dropdownConfig = {
    displayKey: "role",
    search: true,
    height: '300px',
    placeholder: 'Select a role',
    customComparator: (a: any, b: any) => {
      if (a.roleId < b.roleId) {
        return -1;
      } else if (a.roleId > b.roleId) {
        return 1;
      } else {
        return 0;
      }
    },
    limitTo: 0,
    clearOnSelection: false,
    inputDirection: 'ltr'
  }

  ngOnInit(): void {
      this.getAllRoles();
  }

  getAllRoles() {
    this.http.get<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res : ApiResponseModel) => {
      this.roleList = res.data;
    })
  }


  // firstName : String = "Jhon Doe";

  // versionAngular = "Angular 18";

  // version : number = 14;

  // dateTime : Date = new Date();

  // inputType = "checkbox";

  // selectedState = "";

  // showAlert() {
  //   alert("Perhatian ini alert !")
  // }

  // showAlertMsg(msg : String) {
  //   alert(msg)
  // }
}
