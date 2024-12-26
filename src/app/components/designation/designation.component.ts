import { Component, inject, OnInit } from '@angular/core';
import { ApiResponseModel, IDesignation } from '../../model/interface/role';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationList : IDesignation[] = [];
  masterService = inject(MasterService);
  isLoader : boolean = true;

ngOnInit(): void {
    this.masterService.getDesignation().subscribe((data : ApiResponseModel) => {
      this.designationList = data.data;
      this.isLoader = false;
      }, (error) =>{ 
        this.isLoader = false;
        alert("Data gagal diambil");
      }
    );
}



}
