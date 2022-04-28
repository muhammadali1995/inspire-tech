import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  form: FormGroup;
  error: string;
  submitting: boolean;
  loading: boolean;
  user: User;


  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      website: [null],
      address: this.fb.group({
        street: [null, Validators.required],
        suite: [null],
        city: [null, Validators.required],
        zipcode: [null, Validators.required],
        geo: this.fb.group({
          lat: [null],
          lng: [null]
        })
      }),
      company: this.fb.group({
        name: [null, Validators.required],
        catchPhrase: [null],
        bs: [null]
      })
    });
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userService.fetchById(+params.id).subscribe((user: User) => {
        this.form.patchValue({
          ...user
        });
      });
    });
  }


  onSubmit() {
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }
}
