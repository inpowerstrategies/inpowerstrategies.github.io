import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/core/meta-data-service';

@Component({
  templateUrl: './course-pricing.component.html',
  styleUrls: ['./course-pricing.component.css']
})
export class CoursePricingComponent implements OnInit{
  constructor(private metaService: MetadataService) { }

  ngOnInit(): void {
    const tags = new Map([
      ['title', 'Pricing | InPower Strategies'],
      ['description', "We're excited for you to join us!"]
    ]);
    this.metaService.updateTags(tags, 'pricing');
  }
}
