import { Component, OnInit } from "@angular/core";
import { ItemsService } from "./items.service";
@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  content: any[];
  constructor(private _itemsService: ItemsService) {
    this.content = _itemsService.getContent();
  }

  ngOnInit() {}
}
