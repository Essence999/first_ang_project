import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = signal("Sekiro");
  sekiroUrl = "https://image.api.playstation.com/vulcan/img/rnd/202010/2723/knxU5uU5aKvQChKX5OvWtSGC.png";
  count = signal(0);
  data = null;

  lista = ["Gabriel", "Gabriela", "Gabriele", "Gabriella", "Gabrielle", "Gabriellia"];

  constructor(private service: HelloWorldService) {
    service.getCatFacts().subscribe(
      {next: (data) => {
        this.data = data[0].source;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Finalizado.");
        }
      }
    );
  }

  teste() {
    this.count.update(count => count + 1);
  }
}
