import { Module } from '@nestjs/common';
import { DrugService } from './drug.service';
import { DrugController } from './drug.controller';
import { DatabaseModule } from 'src/database.config';
import { drugProviders } from './drug.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DrugController],
  providers: [
    ...drugProviders,
    DrugService]
})
export class DrugModule {}
