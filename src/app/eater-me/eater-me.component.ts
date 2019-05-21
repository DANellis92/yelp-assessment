import { Component, OnInit } from "@angular/core";
import { FoodService } from "../food.service";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-eater-me",
  templateUrl: "./eater-me.component.html",
  styleUrls: ["./eater-me.component.css"]
})
export class EaterMeComponent implements OnInit {
  searchParams: FormGroup;
  selectedBusiness: any;
  submitPressed = false;
  priceSelect = [
    { value: 1, view: "💲" },
    { value: 2, view: "💲💲" },
    { value: 3, view: "💲💲💲" },
    { value: 4, view: "💲💲💲💲" }
  ];

  constructor(private dbService: FoodService, private fb: FormBuilder) {}

  ngOnInit() {
    this.searchParams = this.fb.group({
      city: new FormControl(),
      state: new FormControl(),
      price: new FormControl()
    });
  }
  itsSubmitted(): void {
    this.dbService
      .getPlaces(
        this.searchParams.value.city,
        this.searchParams.value.state,
        this.searchParams.value.price
      )
      .subscribe(res => {
        var selection = Math.floor(Math.random() * res.businesses.length);
        console.log(res.businesses[selection]);
        this.selectedBusiness = res.businesses[selection];
        this.submitPressed = true;
      });
  }
}
