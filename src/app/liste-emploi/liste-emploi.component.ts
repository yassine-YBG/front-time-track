import { Component } from '@angular/core';
import { EmploiDuTempsService } from '../services/emploi-du-temps.service';
import { EmploiDuTemps } from '../models/emploi-du-temps.model';
@Component({
  selector: 'app-liste-emploi',
  templateUrl: './liste-emploi.component.html',
  styleUrls: ['./liste-emploi.component.css']
})
export class ListeEmploiComponent {
  emplois: EmploiDuTemps[] = [];
  filteredEmplois: any[] = []; 
  searchTerm: string = ''; //

  constructor(private emploiDuTempsService: EmploiDuTempsService) {}

  ngOnInit(): void {
    this.getEmploisDuTemps();
  }

  getEmploisDuTemps(): void {
    this.emploiDuTempsService.getEmploisDuTemps().subscribe(
      (data) => {
        console.log('Data received:', data); 
        this.emplois = data;
      },
      (error) => console.error('Error fetching emplois:', error)
    );
  }

  getRecurrentClass(emploi: EmploiDuTemps): string {
    return emploi.recurrent ? 'recurrent-yes' : 'recurrent-no';
  }

  deleteEmploi(id: number): void {
    if (confirm('Are you sure you want to delete this emploi?')) {
      this.emploiDuTempsService.deleteEmploiDuTemps(id).subscribe(
        () => {
          // After successful deletion, refresh the list
          this.emplois = this.emplois.filter(emploi => emploi.id !== id);
          alert('Emploi deleted successfully!');
        },
        (error) => {
          console.error('Error deleting emploi:', error);
          alert('Failed to delete emploi.');
        }
      );
    }
  }

}
