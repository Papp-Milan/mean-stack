import { Component } from '@angular/core';
import { Name } from 'src/app/models/name/name.model';
import { NameService } from 'src/app/services/name/name.service';

@Component({
  selector: 'name-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
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
