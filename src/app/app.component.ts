import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private subscription: Subscription;
  public photosList = [];
  offline: boolean;

  constructor(private appService: AppService) {
    window.addEventListener("online", this.onNetworkStatusChange.bind(this));
    window.addEventListener("offline", this.onNetworkStatusChange.bind(this));
  }

  ngOnInit(): void {
    this.appService.getPhotos(1).subscribe((res: any[]) => {
      this.photosList = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNetworkStatusChange() {
    this.offline = !navigator.onLine;
    console.log("offline " + this.offline);
  }
}
