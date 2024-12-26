import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Client } from '../../model/class/Client';
import { ApiResponseModel, IEmployee } from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  clientList: Client[] = [];
  employeeList: IEmployee[] = [];

  projectForm: FormGroup = new FormGroup({

      clientProjectId: new FormControl(0),
      projectName: new FormControl(""),
      startDate: new FormControl(""),
      expectedEndDate: new FormControl(""),
      leadByEmpId: new FormControl(0),
      completedDate: new FormControl(""),
      contactPerson: new FormControl(""),
      contactPersonContactNo: new FormControl(""),
      totalEmpWorking: new FormControl(""),
      projectCost: new FormControl(""),
      projectDetails: new FormControl(""),
      contactPersonEmailId: new FormControl(""),
      clientId: new FormControl(0),
  })

  serviceClient = inject(ClientService);

  ngOnInit(): void {
      this.getAllClient();
      this.getAllEmployee();
  }

  getAllEmployee() {
    this.serviceClient.getAllEmployees().subscribe((res : ApiResponseModel) => {
      this.employeeList = res.data;
    })
  }

  getAllClient() {
    this.serviceClient.getAllClients().subscribe((res : ApiResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClientProject() {
    const obj = this.projectForm.value;
    debugger
    this.serviceClient.addUpadteClientProject(obj).subscribe((res : ApiResponseModel) => {
      if (res.result) {
        alert("Data berhasil disimpan");
      } else {
        alert(res.message);
      }
    })
  }

}
