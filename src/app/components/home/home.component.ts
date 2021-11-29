import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cvUrl: any

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.cvUrl = this.service.resumeurl
  }

}
