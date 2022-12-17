import { DataSource } from 'typeorm';
import { Drug } from './entities/drug.entity';

export const drugProviders = [
  {
    provide: 'DRUG_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Drug),
    inject: ['DATA_SOURCE'],
  },
];