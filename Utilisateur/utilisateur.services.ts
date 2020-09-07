import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Utilisateur } from './interfaces/utilisateur.interface';
import { CreateUtilisateurDTO } from './dto/create-utilisateur.dto';




@Injectable()
export class UtilisateurService {
    constructor(@InjectModel('Utilisateur') private readonly utilisateurModel: Model<Utilisateur>) { }
   
    // chercher un seul utilisateur
    async getUtilisateur(utilisateurID): Promise<Utilisateur> {
        const utilisateur = await this.utilisateurModel.findById(utilisateurID).exec();
        return utilisateur;
    }
    // créer un nouvel utilisateur
    async addUtilisateur(createUtilisateurDTO: CreateUtilisateurDTO): Promise<Utilisateur> {
        const newUtilisateur = await this.utilisateurModel(createUtilisateurDTO);
        return newUtilisateur.save();
    }
    // modifier les informations d'un utilisateur
    async updateUtilisateur(utilisateurID, createUtilisateurDTO: CreateUtilisateurDTO): Promise<Utilisateur> {
        const updatedUtilisateur = await this.utilisateurModel
            .findByIdAndUpdate(utilisateurID, createUtilisateurDTO, { new: true });
        return updatedUtilisateur;
    }
    // supprimer un utilisateur
    async deleteUtilisateur(utilisateurID): Promise<any> {
        const deletedUtilisateur = await this.utilisateurModel.findByIdAndRemove(utilisateurID);
        return deletedUtilisateur;
    }
}


@Injectable()
export class VehiculeService {
    constructor(@InjectModel('Vehicule') private readonly vehiculeModel: Model<Vehicule>) { }

    // chercher un seul vehicule
    async getVehicule(vehiculeID): Promise<Vehicule> {
        const vehicule = await this.vehiculeModel.findById(vehiculeID).exec();
        return vehicule;
    }
    // créer un nouvel vehicule
    async addVehicule(createVehiculeDTO: CreateVehiculeDTO): Promise<Vehicule> {
        const newVehicule = await this.vehiculeModel(createVehiculeDTO);
        return newVehicule.save();
    }
    // modifier les informations d'un vehicule
    async updateVehicule(vehiculeID, createVehiculeDTO: CreateVehiculeDTO): Promise<Vehicule> {
        const updatedVehicule = await this.vehiculeModel
            .findByIdAndUpdate(vehiculeID, createVehiculeDTO, { new: true });
        return updatedVehicule;
    }
    // supprimer un vehicule
    async deleteVehicule(vehiculeID): Promise<any> {
        const deletedVehicule = await this.vehiculeModel.findByIdAndRemove(vehiculeID);
        return deletedVehicule;
    }
}
