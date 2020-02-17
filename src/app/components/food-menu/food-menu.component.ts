import { Component, OnInit } from "@angular/core";
import { FoodService } from "./food.service";
@Component({
  selector: "app-food-menu",
  templateUrl: "./food-menu.component.html",
  styleUrls: ["./food-menu.component.css"]
})
export class FoodMenuComponent implements OnInit {
  content: any[];

  constructor(private _foodService: FoodService) {
    this.content = _foodService.getContent();
  }

  ngOnInit() {}
}
