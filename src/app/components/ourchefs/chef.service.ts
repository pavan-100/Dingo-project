import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ChefService {
  constructor() {}
  getContent() {
    return [
      {
        img: "../../../assets/team/chefs_1.png",
        head: "Adam Billiard",
        pera: "Chef Master"
      },
      {
        img: "../../../assets/team/chefs_2.png",
        head: "Fred Macyard",
        pera: "Chef Master"
      },
      {
        img: "../../../assets/team/chefs_3.png",
        head: "Justin Stuard",
        pera: "Chef Master"
      }
    ];
  }
}
