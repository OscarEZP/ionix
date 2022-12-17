import { Module } from '@nestjs/common';
import { VaccinationService } from './vaccination.service';
import { VaccinationController } from './vaccination.controller';
import { DatabaseModule } from 'src/database.config';
import { vaccinationProviders } from './vaccination.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [VaccinationController],
  providers: [
    ...vaccinationProviders,
    VaccinationService
  ]
})
export class VaccinationModule {}
