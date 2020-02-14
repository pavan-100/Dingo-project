import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  constructor() {}
  getContent() {
    return [
      {
        img: "../../../assets/food_item/food_item_1.png",
        header: "Indian Burger",
        para:
          "Was brean shed moveth day yielding tree yielding day were female and"
      },
      {
        img: "../../../assets/food_item/food_item_2.png",
        header: "Cremy Noodles",
        para:
          "Was brean shed moveth day yielding tree yielding day were female and"
      },
      {
        img: "../../../assets/food_item/food_item_3.png",
        header: "Cremy Noodles",
        para:
          "Was brean shed moveth day yielding tree yielding day were female and"
      }
    ];
  }
}
