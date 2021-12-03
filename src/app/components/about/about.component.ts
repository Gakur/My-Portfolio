import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about1: any;
  about2: any;

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.about1 = this.service.about
    this.about2 = this.service.about2
  }

}
