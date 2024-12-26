import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj : Client = new Client();
  clientList : Client[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {
      this.loadClientList();
  }

  loadClientList() {
    this.clientService.getAllClients().subscribe((res : ApiResponseModel) => {
      this.clientList = res.data;
    })
  }

  addClient() {
    // debugger;
    this.clientService.addUpdateClient(this.clientObj).subscribe((res : ApiResponseModel) => {
      if (res.result) {
        alert("Data berhasil disimpan");
        this.loadClientList();
        this.clientObj = new Client();
      } else {
        alert(res.message);
      }
    })
  }

  editClient(client : Client) {
    this.clientObj = client;
  }

  deleteClient(clientId : number) {
    this.clientService.deleteClientById(clientId).subscribe((res : ApiResponseModel) => {
      if (res.result) {
        alert("Data berhasil dihapus");
        this.loadClientList();
      } else {
        alert(res.message);
      }
    })
  }

}
