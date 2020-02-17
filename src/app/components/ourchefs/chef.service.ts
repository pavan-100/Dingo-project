import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ChefService {
  constructor() {}
  getContent() {
    return [
      {
        img: "../../../assets/food_item/food_item_1.png",
        head: "Adam Billiard",
        pera: "Chef Master"
      },
      {
        img: "../../../assets/food_item/food_item_1.png",
        head: "Adam Billiard",
        pera: "Chef Master"
      },
      {
        img: "../../../assets/food_item/food_item_1.png",
        head: "Adam Billiard",
        pera: "Chef Master"
      }
    ];
  }
}
