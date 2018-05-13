import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-keyword',
  templateUrl: './register-keyword.component.html',
  styleUrls: ['./register-keyword.component.css']
})
export class RegisterKeywordComponent implements OnInit {
  keywordForm: FormGroup;

  constructor(private fb: FormBuilder) {
   }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.keywordForm = this.fb.group({
      keyword: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(64)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(64)])]
    });
  }
}
