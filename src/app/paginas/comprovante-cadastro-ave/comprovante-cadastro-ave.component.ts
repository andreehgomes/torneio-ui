import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AveService } from '../../_services/ave.service'
import { Ave } from '../../_models/ave'

@Component({
  selector: 'app-comprovante-cadastro-ave',
  templateUrl: './comprovante-cadastro-ave.component.html',
  styleUrls: ['./comprovante-cadastro-ave.component.scss']
})
export class ComprovanteCadastroAveComponent implements OnInit {

  ave: Ave = new Ave();

  constructor(private router: Router, private aveService: AveService) { }

  ngOnInit(): void {
    this.ave = this.aveService.ave;
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
