import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {
  }

  private readonly url: string = 'https://inpowerstrategies.github.io/';

  /**
   * Update the meta tags for the page.
   * @param tags if null, use homepage defaults
   * @param partUrl if null, use homepage defaults
   */
  public updateTags(tags: Map<string, string>, partUrl: string) {
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ property: 'og:site_name', content: 'InPower Strategies' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://inpowerstrategies.github.io/assets/01_circle.jpg' });

    if (tags == null && partUrl == null) {
      const title = 'InPower Strategies | Helping Women Stay Safe';
      this.updateTitleTag(tags.get('title'));
    } else {
      if (!!tags.get('title')) {
        this.updateTitleTag(tags.get('title'));
      }

      if (!!tags.get('description')) {
        this.updateTitleTag(tags.get('description'));
      }

      this.updateUrlTag(this.url + partUrl);
    }
  }

  private updateTitleTag(title: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ property: 'og:title', content: title });
  }

  private updateDescriptionTag(desc: string) {
    this.metaService.updateTag({ name: 'description', content: desc });
    this.metaService.updateTag({ property: 'og:description', content: desc });
  }

  private updateUrlTag(url: string) {
    this.metaService.updateTag({ property: 'og:url', content: url });
  }
}
