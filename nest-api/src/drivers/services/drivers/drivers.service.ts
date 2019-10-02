import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { Drivers } from '../../../dao/Drivers.dao';
import { DriverModel } from '../../../models/driver.model';

@Injectable()
export class DriversService {
    constructor(
        @InjectRepository(Drivers) private driversRepository: Repository<Drivers>) { }
    
    async getDrivers(): Promise<any> {
        return await createQueryBuilder("Drivers")
        .innerJoinAndSelect("Drivers.category", "c")
        .getMany();
    }

    async saveDriver(driver: DriverModel): Promise<any> {
        const dao = new Drivers();
        dao.name = driver.name;
        dao.lastName = driver.lastName;
        dao.categoryId = driver.categoryId;
        return await this.driversRepository.save(dao);
    }
}
