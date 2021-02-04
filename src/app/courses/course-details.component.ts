import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/core/meta-data-service';

@Component({
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  constructor(private metaService: MetadataService) { }

  ngOnInit(): void {
    const tags = new Map([
      ['title', 'Our Courses | InPower Strategies'],
      ['description', 'Build your confidence']
    ]);
    this.metaService.updateTags(tags, 'course');
  }
}
