import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test } from './test.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'host.docker.internal',
      port: 5440,
      username: 'postgres',
      password: '895820',
      database: 'nest_react_db',
      entities: [Test],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Test]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
