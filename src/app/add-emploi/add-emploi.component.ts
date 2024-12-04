import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmploiDuTempsService } from '../services/emploi-du-temps.service'; // Adjust path as needed
import { EmploiDuTemps } from '../models/emploi-du-temps.model';
@Component({
  selector: 'app-add-emploi',
  templateUrl: './add-emploi.component.html',
  styleUrls: ['./add-emploi.component.css']
})
export class AddEmploiComponent {
  emploiForm: FormGroup;

  constructor(private fb: FormBuilder, private emploiService: EmploiDuTempsService) {
    this.emploiForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      recurrent: [false],
      lieu: [''],
      matiere: [''],
      enseignant: [null, Validators.required], // Set this according to your needs
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.emploiForm.valid) {
      const emploiDuTemps: EmploiDuTemps = this.emploiForm.value;
      this.emploiService.create(emploiDuTemps).subscribe(
        response => {
          console.log('Emploi du Temps added successfully:', response);
          // Optionally reset the form or navigate away
          this.emploiForm.reset();
        },
        error => {
          console.error('Error adding Emploi du Temps:', error);
        }
      );
    } else {
      console.error('Form is not valid');
    }
  }
}
