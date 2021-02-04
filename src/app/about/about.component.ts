import { Component, OnInit } from "@angular/core";
import { MetadataService } from "../../core/meta-data-service";

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private metaService: MetadataService) { }

  ngOnInit(): void {
    const tags = new Map([
      ['title', 'About Us'],
      ['description', 'About InPower Strategies']
    ]);
    this.metaService.updateTags(tags, 'about');
  }
}
