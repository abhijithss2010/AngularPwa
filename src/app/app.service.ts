import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AppService {
  baseUrl = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) {}

  getPhotos(albumId: number) {
    return this.http.get(`${this.baseUrl}photos?albumId=${albumId}`);
  }

  getAlbums() {
    return this.http.get(`${this.baseUrl}albums`);
  }
}
