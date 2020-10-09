import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";

interface BudgetItem {
  budget: number;
  title: string;
}

@Component({
  selector: "pb-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  data = {
    datasets: [
      {
        data: [],
        backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb", "#E952DE", "#ED254E", "#18FF6D", "#5BC3EB"],
      },
    ],
    labels: [],
  };
  // This is the angular way of getting a reference to the actual element of our canvas,
  // instead of looking it up by id.
  // It is similar to `refs` in React.
  @ViewChild("chart") chart;
  constructor(private http: HttpClient) {}
  createChart() {
    const ctx = this.chart.nativeElement.getContext("2d");
    const pieChart = new Chart(ctx, {
      type: "pie",
      data: this.data,
    });
  }
  ngOnInit(): void {
    this.http.get("http://localhost:3000/budget").subscribe((res: BudgetItem[]) => {
      this.data.datasets[0].data = res.map((a) => a.budget);
      this.data.labels = res.map((a) => a.title);
      this.createChart();
    });
  }
}
