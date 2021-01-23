import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TorneiosService } from '../../_services/torneios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name


  constructor(private router: Router,
    private torneioService: TorneiosService) { }

  ngOnInit() {
    this.torneioService.getTorneios().subscribe(res => {
      console.log(res);
    });
  }

}
