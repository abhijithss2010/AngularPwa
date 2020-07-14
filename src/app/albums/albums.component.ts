import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"],
})
export class AlbumsComponent implements OnInit {
  private subscription: Subscription;
  public albumsList = [];
  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.appService.getAlbums().subscribe((res: any[]) => {
      this.albumsList = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  selectedAlbumId(albumId) {
    this.router.navigate(["photos/" + albumId]);
  }
}
