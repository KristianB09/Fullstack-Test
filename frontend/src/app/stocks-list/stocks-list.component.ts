import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StocksService } from '../services/stocks.service';
import { Stock } from '../interfaces/stock';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css'],
})
export class StocksListComponent implements OnInit {
  constructor(private http: HttpClient, private stocksService: StocksService) {}

  stocks: Stock[] = [];

  getStocks() {
    this.stocksService
      .getStocks()
      .subscribe((stocks) => (this.stocks = stocks));
  }

  ngOnInit(): void {
    this.getStocks();
  }
}
