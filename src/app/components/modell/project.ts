import { consultant } from './consultant';

export class project {
  id: number ;
  titre: string;
  fichier_charge: string;
  description: string;
  nom_client: string;
  debut_date: Date;
  fin_date: Date;

  constructor(
    id: number= 0,
    titre: string= "",
    fichier_charge: string= "",
    description: string= "",
    nom_client: string= "",
    debut_date: Date = new Date( ""),
    fin_date: Date = new Date(""),
  ) {
    this.id = id ;
    this.titre = titre;
    this.fichier_charge = fichier_charge;
    this.description = description;
    this.nom_client = nom_client;
    this.debut_date = debut_date;
    this.fin_date = fin_date;
  }
}
