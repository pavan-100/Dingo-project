import { Component, OnInit } from "@angular/core";
import { ChefService } from "./chef.service";

@Component({
  selector: "app-ourchefs",
  templateUrl: "./ourchefs.component.html",
  styleUrls: ["./ourchefs.component.css"]
})
export class OurchefsComponent implements OnInit {
  content: any[];
  constructor(private _chefService: ChefService) {
    this.content = _chefService.getContent();
  }

  ngOnInit() {}
}
