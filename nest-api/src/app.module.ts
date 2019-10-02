import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drivers } from './dao/Drivers.dao';
import { DriversModule } from './drivers/drivers.module';
import { Categories } from './dao/Categories.dao';

@Module({
  imports: [
    DriversModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "db4free.net",
      port: 3306,
      username: "fgonsalas",
      password: "testdatabase",
      database: "fgonzalezdb",
      entities: [Drivers, Categories]
  })
       
  ],
})
export class AppModule {}
