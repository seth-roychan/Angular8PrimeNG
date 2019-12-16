import { Component, OnInit } from '@angular/core';
import { DepartmentDataService } from 'src/app/features/department/department-data.service';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-department-list',
  templateUrl: 'department-list.component.html',
  styleUrls: ['department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  columns: any[];

  departments: any[];

  rowSelect;


  constructor(private departmentService: DepartmentDataService, private routeStateService: RouteStateService, private router: Router) {
    this.columns = [
      { field: 'departmentid', header: 'ID' },
      { field: 'description', header: 'Description' },
      { field: 'createdate', header: 'Create Date' },
      { field: 'lastupdate', header: 'Last Update' },
      { field: 'lastupdateuser', header: 'Last Update User' },
      { field: 'priority', header: 'Priority' },
      { field: 'defaultrecord', header: 'Default Record' },
      { field: 'active', header: 'Active' }];
  }

  ngOnInit(): void {
    //this.departments = this.departmentService.getAllDepartments();
   this.departmentService.getAllDepartments().subscribe(
      departments => {
        this.departments = departments;
        //this.filteredGames = this.games;
    },
    //error => this.errorMessage = <any>error
  );
  }

  goToDepartmentDetails(department: number) {
    this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
  }

  onMouseEnter(rowData): void {
    rowData.hover = true;
  }

  onMouseLeave(rowData): void {
    rowData.hover = false;
  }

  onRowClick(event){
    this.rowSelect = event.data;
    console.log(event);
  }

}
