import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './controllers/user/user.module';
import { DrugModule } from './controllers/drug/drug.module';
import { VaccinationModule } from './controllers/vaccination/vaccination.module';
import { AuthMiddleware } from './middleware/auth/auth.middleware';
import { DrugController } from './controllers/drug/drug.controller';
import { VaccinationController } from './controllers/vaccination/vaccination.controller';

@Module({
  imports: [UserModule, DrugModule, VaccinationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(DrugController, VaccinationController);
  }
}
