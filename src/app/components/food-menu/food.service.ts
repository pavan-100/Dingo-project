import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor() {}
  getContent() {
    return [
      {
        img: "../../../assets/food_menu/single_food_1.png",
        head: "Pork Sandwich",
        pera: "They're wherein heaven seed hath nothing",
        cost: "$40.00"
      },
      {
        img: "../../../assets/food_menu/single_food_2.png",
        head: "Pork Sandwich",
        pera: "They're wherein heaven seed hath nothing",
        cost: "$40.00"
      },
      {
        img: "../../../assets/food_menu/single_food_3.png",
        head: "Pork Sandwich",
        pera: "They're wherein heaven seed hath nothing",
        cost: "$40.00"
      },
      {
        img: "../../../assets/food_menu/single_food_4.png",
        head: "Pork Sandwich",
        pera: "They're wherein heaven seed hath nothing",
        cost: "$40.00"
      },
      {
        img: "../../../assets/food_menu/single_food_5.png",
        head: "Pork Sandwich",
        pera: "They're wherein heaven seed hath nothing",
        cost: "$40.00"
      },
      {
        img: "../../../assets/food_menu/single_food_6.png",
        head: "Pork Sandwich",
        pera: "They're wherein heaven seed hath nothing",
        cost: "$40.00"
      }
    ];
  }
}
