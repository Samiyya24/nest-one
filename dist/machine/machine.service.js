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
exports.MachineService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const machine_model_1 = require("./models/machine.model");
let MachineService = class MachineService {
    constructor(machineRepo) {
        this.machineRepo = machineRepo;
    }
    async createMachine(createMachineDto) {
        const machine = await this.machineRepo.create(createMachineDto);
        return machine;
    }
    async getAllMachinies() {
        return this.machineRepo.findAll();
    }
    async getMachineById(id) {
        return this.machineRepo.findByPk(id);
    }
    async deleteMachineById(id) {
        return this.machineRepo.destroy({ where: { id } });
    }
    async updateMachineById(id, updateMachineDto) {
        const machine = await this.machineRepo.update(updateMachineDto, {
            where: { id },
            returning: true,
        });
        return machine[1][0];
    }
};
exports.MachineService = MachineService;
exports.MachineService = MachineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(machine_model_1.Machine)),
    __metadata("design:paramtypes", [Object])
], MachineService);
//# sourceMappingURL=machine.service.js.map