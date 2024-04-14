import { Component } from '@angular/core';
import { Name } from 'src/app/models/name.model';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css'],
})
export class AddNameComponent {
  name: Name = {
    name: '',
    gender: '',
  };
  submitted = false;

  constructor(private nameService: NameService) {}

  saveName(): void {
    const data = {
      name: this.name.name,
      gender: this.name.gender
    };

    this.nameService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newName(): void {
    this.submitted = false;
    this.name = {
      name: '',
      gender: '',
    };
  }
}
