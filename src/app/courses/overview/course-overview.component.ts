import { Component, OnInit } from "@angular/core";
import { MetadataService } from "src/core/meta-data-service";

@Component({
  selector: 'course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit {
  constructor(private metaService: MetadataService) { }

  ngOnInit(): void {
    const tags = new Map([
      ['title', 'InPower Strategies'],
      ['description', 'Helping Women Stay Safe']
    ]);
    this.metaService.updateTags(tags, 'overview');
  }
}
