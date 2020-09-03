import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const postgress: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'secret',
  database: 'taskmanagment',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true
};
