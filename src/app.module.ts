import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './app/domain/modules/user.module';
import { MedModule } from './app/domain/modules/med.module';

@Module({
  imports: [UserModule, MedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
