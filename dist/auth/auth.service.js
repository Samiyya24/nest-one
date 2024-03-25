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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signUp(createUserDto) {
        const condidate = await this.usersService.getUserByEmail(createUserDto.email);
        if (condidate) {
            throw new common_1.BadRequestException("Bunday foydalanuvchi mavjud");
        }
        const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
        createUserDto.password = hashedPassword;
        const newUser = await this.usersService.createUser(createUserDto);
        return this.generateToken(newUser);
    }
    async generateToken(user) {
        const payload = { sub: user.id, email: user.email, roles: user.roles };
        return { token: this.jwtService.sign(payload) };
    }
    async login(loginDto) {
        const user = await this.usersService.getUserByEmail(loginDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException("Email yoki parol hato");
        }
        const validPassword = await bcrypt.compare(loginDto.password, user.password);
        if (!validPassword) {
            throw new common_1.UnauthorizedException("Email yoki parol hato");
        }
        return this.generateToken(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map