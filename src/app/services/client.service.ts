import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Client } from '../model/class/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }

  getAllClients() : Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + "/GetAllClients");
  }

  getAllEmployees() : Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + "/GetAllEmployee");
  }

  addUpdateClient(obj : Client) : Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL + "/AddUpdateClient", obj);
  }

  deleteClientById(clientId : number) : Observable<ApiResponseModel>{
    return this.http.delete<ApiResponseModel>(environment.API_URL + "/DeleteClientByClientId?clientId=" + clientId);
  }

  //Add Client Project
  addUpadteClientProject(obj : Client) : Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL + "/AddUpdateClientProject", obj);
  }
}
