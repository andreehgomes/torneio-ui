import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-criador',
  templateUrl: './toolbar-criador.component.html',
  styleUrls: ['./toolbar-criador.component.scss']
})
export class ToolbarCriadorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
