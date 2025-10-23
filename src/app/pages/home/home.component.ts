import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SkillsComponent, ProjectsComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
