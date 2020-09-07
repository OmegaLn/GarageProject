import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { CreateUtilisateurDTO } from './dto/create-utilisateur.dto';


@Controller('utilisateur')
export class UtilisateurController {
    constructor(private utilisateurService: UtilisateurService) { }

    // ajouter un utilisateur
    @Post('/create')
    async addUtilisateur(@Res() res, @Body() createUtilisateurDTO: CreateUtilisateurDTO) {
        const utilisateur = await this.utilisateurService.addUtilisateur(createUtilisateurDTO);
        return res.status(HttpStatus.OK).json({
            message: "Utilisateur has been created successfully",
            utilisateur
        })
    }

    // chercher un utilisateur avec son identifiant
    @Get('utilisateur/:idutilisateur')
    async getUtilisateur(@Res() res, @Param('idutilisateur') idutilisateur) {
        const utilisateur = await this.utilisateurService.getUtilisateur(idutilisateur);
        if (!utilisateur) throw new NotFoundException('Utilisateur does not exist!');
        return res.status(HttpStatus.OK).json(utilisateur);
    }

...
@Controller('utilisateur')
export class UtilisateurController {
    constructor(private utilisateurService: UtilisateurService) { }
    ...

    // Modifier les informations d'un utilisateur
    @Put('/update')
    async updateUtilisateur(@Res() res, @Query('idutilisateur') idutilisateur, @Body() createUtilisateurDTO: CreateUtilisateurDTO) {
        const utilisateur = await this.utilisateurService.updateUtilisateur(idutilisateur, createUtilisateurDTO);
        if (!utilisateur) throw new NotFoundException('Utilisateur does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Utilisateur has been successfully updated',
            utilisateur
        });
    }

    // Supprimer un utilisateur
    @Delete('/delete')
    async deleteUtilisateur(@Res() res, @Query('idutilisateur') idutilisateur) {
        const utilisateur = await this.utilisateurService.deleteUtilisateur(idutilisateur);
        if (!utilisateur) throw new NotFoundException('Utilisateur does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Utilisateur has been deleted',
            utilisateur
        })
    }
}


@Controller('vehicule')
export class VehiculeController {
    constructor(private vehiculeService: VehiculeService) { }

    // ajouter un vehicule
    @Post('/create')
    async addVehicule(@Res() res, @Body() createVehiculeDTO: CreateVehiculeDTO) {
        const vehicule = await this.vehiculeService.addVehicule(createVehiculeDTO);
        return res.status(HttpStatus.OK).json({
            message: "Vehicule has been created successfully",
            vehicule
        })
    }

    // chercher un vehicule avec son identifiant
    @Get('vehicule/:idvehicule')
    async getVehicule(@Res() res, @Param('idvehicule') idvehicule) {
        const vehicule = await this.vehiculeService.getVehicule(idvehicule);
        if (!vehicule) throw new NotFoundException('Vehicule does not exist!');
        return res.status(HttpStatus.OK).json(vehicule);
    }

...
    @Controller('vehicule')
    export class VehiculeController {
    constructor(private vehiculeService: VehiculeService) { }
    ...

    // Modifier les informations d'un vehicule
    @Put('/update')
    async updateVehicule(@Res() res, @Query('idvehicule') idvehicule, @Body() createVehiculeDTO: CreateVehiculeDTO) {
        const vehicule = await this.vehiculeService.updateVehicule(idvehicule, createVehiculeDTO);
        if (!vehicule) throw new NotFoundException('Vehicule does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Vehicule has been successfully updated',
            vehicule
        });
    }

    // Supprimer un vehicule
    @Delete('/delete')
    async deleteVehicule(@Res() res, @Query('idvehicule') idvehicule) {
        const vehicule = await this.vehiculeService.deleteVehicule(idvehicule);
        if (!vehicule) throw new NotFoundException('Vehicule does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Vehicule has been deleted',
            vehicule
        })
    }
}

@Controller('vehicule')
export class VehiculeController {
    constructor(private vehiculeService: VehiculeService) { }

    // ajouter un vehicule
    @Post('/create')
    async addVehicule(@Res() res, @Body() createVehiculeDTO: CreateVehiculeDTO) {
        const vehicule = await this.vehiculeService.addVehicule(createVehiculeDTO);
        return res.status(HttpStatus.OK).json({
            message: "Vehicule has been created successfully",
            vehicule
        })
    }

    // chercher un vehicule avec son identifiant
    @Get('vehicule/:idvehicule')
    async getVehicule(@Res() res, @Param('idvehicule') idvehicule) {
        const vehicule = await this.vehiculeService.getVehicule(idvehicule);
        if (!vehicule) throw new NotFoundException('Vehicule does not exist!');
        return res.status(HttpStatus.OK).json(vehicule);
    }

...
    @Controller('vehicule')
    export class VehiculeController {
    constructor(private vehiculeService: VehiculeService) { }
    ...

    // Modifier les informations d'un vehicule
    @Put('/update')
    async updateVehicule(@Res() res, @Query('idvehicule') idvehicule, @Body() createVehiculeDTO: CreateVehiculeDTO) {
        const vehicule = await this.vehiculeService.updateVehicule(idvehicule, createVehiculeDTO);
        if (!vehicule) throw new NotFoundException('Vehicule does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Vehicule has been successfully updated',
            vehicule
        });
    }

    // Supprimer un vehicule
    @Delete('/delete')
    async deleteVehicule(@Res() res, @Query('idvehicule') idvehicule) {
        const vehicule = await this.vehiculeService.deleteVehicule(idvehicule);
        if (!vehicule) throw new NotFoundException('Vehicule does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Vehicule has been deleted',
            vehicule
        })
    }
}
