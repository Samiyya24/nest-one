"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const start = async () => {
    try {
        const PORT = process.env.PORT;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        await app.listen(PORT, () => {
            console.log(`Server ${PORT} portda ishga tushdi`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=main.js.map