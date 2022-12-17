import { DataSource } from 'typeorm';
import { Vaccination } from './entities/vaccination.entity';

export const vaccinationProviders = [
  {
    provide: 'VACCINATION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Vaccination),
    inject: ['DATA_SOURCE'],
  },
];