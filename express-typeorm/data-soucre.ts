import "reflect-metadata";
import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'test',
  password: '123456789',
  database: 'Batch3738',
  entities: ['entities/**/*.entity{.ts,.js}'],
  synchronize: true, //mỗi khi thay đổi entity tự động thay đổi cấu trúc SQLserver
  logging: false, //ghi log để debug
  options: {
    encrypt: false,
  },
});