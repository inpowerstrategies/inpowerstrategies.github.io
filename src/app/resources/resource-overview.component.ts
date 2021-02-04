import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/core/meta-data-service';

@Component({
  templateUrl: './resource-overview.component.html',
  styleUrls: ['./resource-overview.component.css']
})

export class ResourceOverviewComponent implements OnInit {
  constructor(private metaService: MetadataService) { }

  ngOnInit(): void {
    const tags = new Map([
      ['title', 'Resources | InPower Strategies'],
      ['description', 'Useful links and resources']
    ]);
    this.metaService.updateTags(tags, 'resources');
  }
}
