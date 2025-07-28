import { Injectable } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';
import { configuration } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiEndPoints {
    getAuthorizedNavItems(): string {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/configuration/nav-items`;
    }

    constructor(private readonly configurationService: ConfigurationService) { }

    /*********** FARM **************/
    getActiveFarms() {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/farms/active`;
    }

    getFarmsWithPaging(sortField: string, sortDirection: string, pageIndex: number, pageSize: number) {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/farms/paging/${sortField}/${sortDirection}/${pageIndex}/${pageSize}`;
    }

    createFarm() {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/farms`;
    }

    updateFarm() {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/farms`;
    }

    getFarmByFarmId(farmId: string) {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/farms/${farmId}`;
    }

    deleteFarm(farmId: string) {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/farms/${farmId}`;
    }

    /*********** CAGE **************/
    getActiveCages(farmId: string): string {
      return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/cages/active?farmId=${farmId}`;
    }

    getCagesWithPaging(sortField: string, sortDirection: string, pageIndex: number, pageSize: number) {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/cages/paging/${sortField}/${sortDirection}/${pageIndex}/${pageSize}`;
    }

    createCage() {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/cages`;
    }

    updateCage() {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/cages`;
    }

    getCageByCageId(cageId: string) {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/cages/${cageId}`;
    }

    deleteCage(cageId: string) {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/cages/${cageId}`;
    }

    /*********** FARM **************/
    getAnimalsWithPaging(sortField: string, sortDirection: string, pageIndex: number, pageSize: number) {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/animals/paging/${sortField}/${sortDirection}/${pageIndex}/${pageSize}`;
    }

    createAnimal() {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/animals`;
    }

    updateAnimal() {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/animals`;
    }

    getAnimalByAnimalId(animalId: string) {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/animals/${animalId}`;
    }

    deleteAnimal(animalId: string) {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/animals/${animalId}`;
    }


    /*********** USERS **************/
    getUserInfo() {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/users/info`;
    }

    signOut() {
        return `${this.configurationService.apiBaseUrl}/api/${configuration.version}/users/sign-out`;
    }

}
