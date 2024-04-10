import "reflect-metadata";
import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
  type: 'mssql',
  host: 'LAPTOP-9A24D18D', //Computer Name
  port: 1433,
  username: 'test',
  password: '123456789',
  database: 'Batch3738', //Tên Database
  entities: ['entities/**/*.entity{.ts,.js}'], //Chỉ rõ thư mục chứa các file entity
  synchronize: true, //Đồng bộ với Database
  logging: false, //ghi log
  options: {
    encrypt: false, //True khi chạy trên production
  },
});