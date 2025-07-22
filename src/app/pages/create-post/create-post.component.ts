import { Component } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-create-post',
  imports: [ButtonModule,InputTextModule,TextareaModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

}
