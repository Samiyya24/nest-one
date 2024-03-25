"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const start = async () => {
    try {
        const PORT = process.env.PORT;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.useGlobalPipes(new common_1.ValidationPipe);
        const config = new swagger_1.DocumentBuilder()
            .setTitle("Nest-One Project")
            .setDescription("Nest-One REST API")
            .setVersion("1.0")
            .addTag("NESTJS, Swagger, Validation, Sequelize")
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup("api/docs", app, document);
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