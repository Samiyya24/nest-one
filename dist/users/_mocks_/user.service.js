"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const user_stub_1 = require("../test/stubs/user.stub");
exports.UsersService = jest.fn().mockReturnValue({
    createUser: jest.fn().mockResolvedValue((0, user_stub_1.userStub)())
});
//# sourceMappingURL=user.service.js.map