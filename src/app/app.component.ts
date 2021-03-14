import { Component } from '@angular/core';    //@KATMAN KULLANIMI İÇİN IMPORT ETTİK
//Component => HTML'in datasını yönettiğimiz yer (angulardaki adı)
//@Component => attribute/imza----Deklarasyon
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']    //[] array
})
export class AppComponent {
  title: string = 'northwind';


}
