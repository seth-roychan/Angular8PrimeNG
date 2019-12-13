import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/core/models/department.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DepartmentDataService {

    departments: any[];

    PHP_API_SERVER = 'http://seafoodpos';
    constructor(private httpClient: HttpClient) {}

    // constructor() {
    //     this.departments = [
    //         { Id: 1, Name: ".net", Description: ".Net" },
    //         { Id: 2, Name: "HR", Description: "HR" },
    //         { Id: 3, Name: "Admin", Description: "Admin" },
    //         { Id: 4, Name: "PHP", Description: "PHP" }];
    // }

    getAllDepartments(): Observable<Department[]> {
      return this.httpClient.get<Department[]>('http://seafoodpos/api/read.php');
    }


    //readPolicies(): Observable<Policy[]>{
    //  return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/api/read.php`);
    //}

    getDepartmentById(id: number) {
        var data;
        this.departments.forEach(element => {
            if (element.Id === id) {
                data = element;
            }
        });
        return data;
    }

    getDepartmentByName(name: string) {
        var data;
        this.departments.forEach(element => {
            if (element.Name === name) {
                data = element;
            }
        });
        return data;
    }
}
