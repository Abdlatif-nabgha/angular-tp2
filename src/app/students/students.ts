import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-students',
  standalone: true,
  templateUrl: './students.html',
  styleUrl: './students.css',
  imports: [MatTableModule, MatCardModule, MatDividerModule, MatButtonModule, MatPaginatorModule, MatSortModule],
})
export class Students implements OnInit, AfterViewInit {
  public students: any;
  public displayedColumns: string[] = ['id', 'firstName', 'lastName', 'payments'];
  public dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() {}

  ngOnInit(): void {
    this.students = [];

    for (let i = 0; i < 100; i++) {
      this.students.push({
        id: i,
        firstName: Math.random().toString(20),
        lastName: Math.random().toString(20),
      });
    }
    this.dataSource.data = this.students;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
