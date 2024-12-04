import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmploiDuTempsService } from '../services/emploi-du-temps.service';
import { EmploiDuTemps } from '../models/emploi-du-temps.model'; // Adjust the import according to your model path

@Component({
  selector: 'app-modify-emploi',
  templateUrl: './modify-emploi.component.html',
  styleUrls: ['./modify-emploi.component.css']
})
export class ModifyEmploiComponent implements OnInit {
  emploiForm!: FormGroup;
  emploiDuTempsId!: number;
  initialFormValues: any = {}; // To store the initial form values

  constructor(
    private fb: FormBuilder,
    private emploiDuTempsService: EmploiDuTempsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.emploiDuTempsId = +this.route.snapshot.paramMap.get('id')!;  // Retrieve the 'id' from the URL params
    this.initializeForm();
    this.loadEmploiDuTemps();
  }

  initializeForm(): void {
    this.emploiForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      recurrent: [false],
      lieu: [''],
      matiere: [''],
      enseignant: ['', Validators.required]
    });
  }

  loadEmploiDuTemps(): void {
    this.emploiDuTempsService.getEmploiDuTempsById(this.emploiDuTempsId).subscribe((emploiDuTemps: EmploiDuTemps) => {
      this.emploiForm.patchValue(emploiDuTemps);

      // Save initial form values
      this.initialFormValues = { ...emploiDuTemps };  // Copy the initial data to compare later
    });
  }

  onSubmit(): void {
    if (this.emploiForm.invalid) {
      return;
    }

    const updatedFields: any = {};

    // Compare each field and add to updatedFields if it has changed
    if (this.emploiForm.value.titre !== this.initialFormValues.titre) {
      updatedFields.titre = this.emploiForm.value.titre;
    }
    if (this.emploiForm.value.description !== this.initialFormValues.description) {
      updatedFields.description = this.emploiForm.value.description;
    }
    if (this.emploiForm.value.date_debut !== this.initialFormValues.date_debut) {
      updatedFields.date_debut = this.emploiForm.value.date_debut;
    }
    if (this.emploiForm.value.date_fin !== this.initialFormValues.date_fin) {
      updatedFields.date_fin = this.emploiForm.value.date_fin;
    }
    if (this.emploiForm.value.recurrent !== this.initialFormValues.recurrent) {
      updatedFields.recurrent = this.emploiForm.value.recurrent;
    }
    if (this.emploiForm.value.lieu !== this.initialFormValues.lieu) {
      updatedFields.lieu = this.emploiForm.value.lieu;
    }
    if (this.emploiForm.value.matiere !== this.initialFormValues.matiere) {
      updatedFields.matiere = this.emploiForm.value.matiere;
    }
    if (this.emploiForm.value.enseignant !== this.initialFormValues.enseignant) {
      updatedFields.enseignant = this.emploiForm.value.enseignant;
    }

    // Call the service to update only the modified fields
    this.emploiDuTempsService.updateEmploiDuTemps(this.emploiDuTempsId, updatedFields)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']); // Redirect to the list of emplois du temps after update
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}
