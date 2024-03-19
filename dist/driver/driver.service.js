"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverService = void 0;
const common_1 = require("@nestjs/common");
const driver_model_1 = require("./models/driver.model");
const sequelize_1 = require("@nestjs/sequelize");
let DriverService = class DriverService {
    constructor(driverRepo) {
        this.driverRepo = driverRepo;
    }
    async createDriver(createDriverDto) {
        const driver = await this.driverRepo.create(createDriverDto);
        return driver;
    }
    async getAllDrivirs() {
        return this.driverRepo.findAll();
    }
    async getDriverById(id) {
        return this.driverRepo.findByPk(id);
    }
    async deleteDriverById(id) {
        return this.driverRepo.destroy({ where: { id } });
    }
    async updateDriverById(id, updateDriverDto) {
        const driver = await this.driverRepo.update(updateDriverDto, {
            where: { id },
            returning: true,
        });
        return driver[1][0];
    }
};
exports.DriverService = DriverService;
exports.DriverService = DriverService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(driver_model_1.Driver)),
    __metadata("design:paramtypes", [Object])
], DriverService);
//# sourceMappingURL=driver.service.js.map