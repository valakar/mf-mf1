import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../root/fake-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly fakeApi: FakeApiService) { }

  ngOnInit(): void {
  }

  onApiCall() {
    this.fakeApi.getSomething().subscribe()
  }

}
