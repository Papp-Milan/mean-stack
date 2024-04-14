import { Component, OnInit } from '@angular/core';
import { Name } from 'src/app/models/name.model';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-names-list',
  templateUrl: './names-list.component.html',
  styleUrls: ['./names-list.component.css'],
})
export class NamesListComponent implements OnInit {
  names?: Name[];
  currentName: Name = {};
  currentIndex = -1;
  name = '';

  constructor(
    private nameService: NameService
  ) { }

  ngOnInit(): void {
    this.retrieveNames();
  }

  retrieveNames(): void {
    this.nameService.getAll().subscribe({
      next: (data) => {
        this.names = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveNames();
    this.currentName = {};
    this.currentIndex = -1;
  }

  setActiveName(name: Name, index: number): void {
    this.currentName = name;
    this.currentIndex = index;
  }

  removeAllNames(): void {
    this.nameService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchName(): void {
    this.currentName = {};
    this.currentIndex = -1;

    this.nameService.findByName(this.name).subscribe({
      next: (data) => {
        this.names = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
