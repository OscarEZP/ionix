import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: ['dist/controllers/**/entities/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true
      });

      return dataSource.initialize();
    },
  },
];

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}