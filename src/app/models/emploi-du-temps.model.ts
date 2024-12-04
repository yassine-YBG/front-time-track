export interface EmploiDuTemps {
  id?: number; // optional for new entries
  titre: string;
  description?: string; // optional
  date_debut: Date;
  date_fin: Date;
  recurrent?: boolean; // optional
  lieu?: string; // optional
  matiere?: string; // optional
  enseignant: string; // user ID
  updated_at?: Date; // optional for new entries
}
