import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/core/models/department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhpApiService {

  PHP_API_SERVER = 'http://127.0.0.1:80';
  constructor(private httpClient: HttpClient) {}

  readPolicies(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }

  createPolicy(department: Department): Observable<Department>{
    return this.httpClient.post<Department>(`${this.PHP_API_SERVER}/api/create.php`, department);
  }

  updatePolicy(department: Department) {
    return this.httpClient.put<Department>(`${this.PHP_API_SERVER}/api/update.php`, department);
  }

  deletePolicy(id: number) {
    return this.httpClient.delete<Department>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }

}
