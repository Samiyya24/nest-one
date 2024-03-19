import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyModule } from './company/company.module';
import { Company } from './company/models/company.model';
import { DriverModule } from './driver/driver.module';
import { MachineModule } from './machine/machine.module';
import { BuilderModule } from './builder/builder.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:".env", isGlobal:true}),
    SequelizeModule.forRoot({
      dialect:"postgres",
      host:process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DB,
      models:[Company],
      autoLoadModels:true,
      sync:{alter:true},
      logging:true

    }),
    CompanyModule,
    DriverModule,
    MachineModule,
    BuilderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
