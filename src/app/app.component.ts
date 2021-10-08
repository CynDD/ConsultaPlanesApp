import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./portal-unificado.css',
              './consulta.css',
              './comprasenlinea.css',
              './style.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'consultaPlanesApp';
}
