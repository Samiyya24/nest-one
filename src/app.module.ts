import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
// import { CompanyModule } from './company/company.module';
// import { Company } from './company/models/company.model';
// import { DriverModule } from './driver/driver.module';
// import { MachineModule } from './machine/machine.module';
// import { BuilderModule } from './builder/builder.module';
// import { Machine } from './machine/models/machine.model';
// import { Driver } from './driver/models/driver.model';
// import { Builder } from './builder/models/builder.model';
// import { MachineDriverModule } from './machine_driver/machine_driver.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/models/role.model';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { UserRoles } from './roles/models/user-role.model';
import { AuthModule } from './auth/auth.module';
import { Company } from './company/models/company.model';
import { CompanyModule } from './company/company.module';
import { DriverModule } from './driver/driver.module';
import { Driver } from './driver/models/driver.model';
import { Machine } from './machine/models/machine.model';
import { MachineModule } from './machine/machine.module';
import { Builder } from './builder/models/builder.model';
import { BuilderModule } from './builder/builder.module';
import { MachineDriverModule } from './machine_driver/machine_driver.module';
import { MachineDriver } from './machine_driver/models/machine_driver.model';

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
      models:[Role, User, UserRoles, Company, Driver, Builder],
      autoLoadModels:true,
      sync:{alter:true},
      logging:true

    }),
    CompanyModule,
    DriverModule,
    // MachineModule,
    // MachineDriverModule,
    BuilderModule,
    RolesModule,
    UsersModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
