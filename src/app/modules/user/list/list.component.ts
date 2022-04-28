import {UserService} from './../../../services/user.service';
import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: User [] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.fetchAll().subscribe(users => {
      this.users = users;
    });
  }

}
