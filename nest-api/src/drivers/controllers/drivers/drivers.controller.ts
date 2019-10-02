import { Controller, Get, Post, Body } from '@nestjs/common';
import { DriversService } from '../../services/drivers/drivers.service';
import { DriverModel } from '../../../models/driver.model';
import { Drivers } from '../../../dao/Drivers.dao';

@Controller('drivers')
export class DriversController {
    constructor(private readonly driversService: DriversService) {}
    @Get()
    async getDrivers(): Promise<any> {
        return await this.driversService.getDrivers();
    }

    @Post()
    async postDriver(@Body() driverModel: DriverModel): Promise<Drivers> {
        return this.driversService.saveDriver(driverModel);
    }
}

