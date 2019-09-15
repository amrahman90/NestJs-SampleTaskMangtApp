import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Ravi#2024',
    database: 'taskmanagement',
    entities: [__dirname + '/../**/*.entity.ts'],  // that  translate you tables in the database
    synchronize: true,
};
