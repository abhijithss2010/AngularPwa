import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AppService } from "./app.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  offline: boolean;

  constructor(private appService: AppService, private router: Router) {
    window.addEventListener("online", this.onNetworkStatusChange.bind(this));
    window.addEventListener("offline", this.onNetworkStatusChange.bind(this));
  }

  onNetworkStatusChange() {
    this.offline = !navigator.onLine;
    console.log("offline " + this.offline);
  }
}
