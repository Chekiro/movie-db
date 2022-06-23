import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'embed-video',
  templateUrl: './embed-video.component.html',
  styleUrls: ['./embed-video.component.css'],
})
export class EmbedVideoComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;

  videoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoUrl = this.getSafeUrl(
      'https://www.youtube-nocookie.com/embed/' + this.key
    );
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
