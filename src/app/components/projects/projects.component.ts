import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects: any = [];

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.projects = this.service.getProjects()
    console.log(this.projects)
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }
  pageChanged(event: any){
    this.config.currentPage = event;
  }

}
