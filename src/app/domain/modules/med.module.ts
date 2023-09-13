import { Module } from "@nestjs/common";
import { MedController } from "../controllers/med.controller";
import { MedService } from "../service/med.service";


@Module({
    controllers: [MedController],
    providers: [MedService],
    exports: []
})
export class MedModule {}