"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const roles_module_1 = require("./roles/roles.module");
const role_model_1 = require("./roles/models/role.model");
const users_module_1 = require("./users/users.module");
const user_model_1 = require("./users/models/user.model");
const user_role_model_1 = require("./roles/models/user-role.model");
const auth_module_1 = require("./auth/auth.module");
const company_model_1 = require("./company/models/company.model");
const company_module_1 = require("./company/company.module");
const driver_module_1 = require("./driver/driver.module");
const driver_model_1 = require("./driver/models/driver.model");
const builder_model_1 = require("./builder/models/builder.model");
const builder_module_1 = require("./builder/builder.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [role_model_1.Role, user_model_1.User, user_role_model_1.UserRoles, company_model_1.Company, driver_model_1.Driver, builder_model_1.Builder],
                autoLoadModels: true,
                sync: { alter: true },
                logging: true
            }),
            company_module_1.CompanyModule,
            driver_module_1.DriverModule,
            builder_module_1.BuilderModule,
            roles_module_1.RolesModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map