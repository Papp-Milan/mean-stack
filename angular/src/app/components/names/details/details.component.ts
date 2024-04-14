import { Component, Input, OnInit } from '@angular/core';
import { NameService } from 'src/app/services/name/name.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Name } from 'src/app/models/name/name.model';

@Component({
  selector: 'name-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentName: Name = {
    name: '',
    gender: '',
  };

  message = '';

  constructor(
    private nameService: NameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getName(this.route.snapshot.params['id']);
    }
  }

  getName(id: string): void {
    this.nameService.get(id).subscribe({
      next: (data) => {
        this.currentName = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateName(): void {
    this.message = '';

    this.nameService
      .update(this.currentName.id, this.currentName)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This name was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteName(): void {
    this.nameService.delete(this.currentName.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/names']);
      },
      error: (e) => console.error(e)
    });
  }
}
