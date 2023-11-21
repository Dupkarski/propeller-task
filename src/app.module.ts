/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsModule } from './modules/product.module';
import { ImagesModule } from './modules/images.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
       // Load the configuration from ormconfig.json
      // or directly provide the configuration here
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'propeller',
      synchronize: true,
      logging: true,
      // eslint-disable-next-line prettier/prettier
      entities: ["dist/**/*.entity.js"],
      migrations: ["dist/**/*.migration.js"],
      subscribers: ["dist/**/*.subscriber.js"],
      retryAttempts: 10, // Adjust the retryAttempts and other options as needed
      retryDelay: 5000, // Adjust the retryDelay and other options as needed
      autoLoadEntities: true, // Set to true if you want entities to be loaded automatically
      keepConnectionAlive: true, // Set to true to keep the connection alive even if the application is shut down
      verboseRetryLog: true, // Set to true for more verbose retry logs
      manualInitialization: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: {
        // Specify your GraphQL driver (e.g., 'apollo-server-express')
        // Check the documentation for the correct value
        // https://docs.nestjs.com/graphql/migration-guide#apollo-server
        name: 'apollo-server-express',
      },
    }),
    ProductsModule,
    ImagesModule,
  ],
})
// eslint-disable-next-line prettier/prettier
export class AppModule {}