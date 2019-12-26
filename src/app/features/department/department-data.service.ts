import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Department } from 'src/app/core/models/department.model';
import { Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DepartmentDataService {

    departments: Department[];

    private PHP_API_SERVER = 'http://seafoodpos';

    constructor(private httpClient: HttpClient) {}

    // constructor() {
    //     this.departments = [
    //         { Id: 1, Name: ".net", Description: ".Net" },
    //         { Id: 2, Name: "HR", Description: "HR" },
    //         { Id: 3, Name: "Admin", Description: "Admin" },
    //         { Id: 4, Name: "PHP", Description: "PHP" }];
    // }

    getAllDepartments(): Observable<Department[]> {
        return this.httpClient.get<Department[]>('http://seafoodpos/api/read.php').pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {

        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {

            errorMessage = `An error occurred: ${err.error.message}`;
        } else {

            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

      // return this.httpClient.get<Department[]>('http://seafoodpos/api/read.php');

      // this.httpClient.get('http://seafoodpos/api/read.php').subscribe((res : any[])=>{
      //   console.log(res);
      //   this.departments = res;
      // });

    //   return this.httpClient.get('http://seafoodpos/api/read.php')
    //         .toPromise()
    //         .then(res => <Department[]> res.data)
    //         .then(data => { return data; });




    //readPolicies(): Observable<Policy[]>{
    //  return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/api/read.php`);
    //}

    getDepartmentById(id: number) {
        var data;
        this.departments.forEach(element => {
            if (element.departmentid === id) {
                data = element;
            }
        });
        return data;
    }

    getDepartmentByName(name: string) {
        var data;
        this.departments.forEach(element => {
            if (element.description === name) {
                data = element;
            }
        });
        return data;
    }
}
