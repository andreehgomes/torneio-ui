import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-toolbar-associacao',
  templateUrl: './toolbar-associacao.component.html',
  styleUrls: ['./toolbar-associacao.component.scss']
})
export class ToolbarAssociacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
