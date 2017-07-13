import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Tier } from '../tier.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  tiers: Tier[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.tiers = this.selectedProject.tiers;
    //so this doesn't work in the html...womp womp
  }

  beginUpdatingProject(projectToUpdate){
    this.projectService.updateProject(projectToUpdate);
  }
}