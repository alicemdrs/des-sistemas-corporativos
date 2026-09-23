import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadoModule } from './estado/estado.module';
import { AuthModule } from './auth/auth.module';
import { SolicitacoesModule } from './solicitacoes/solicitacoes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST') ?? 'db',
        port: Number(config.get<number>('DB_PORT') ?? 5432),
        database: config.get<string>('DB_NAME') ?? 'solicitacoes',
        username: config.get<string>('DB_USER') ?? 'app',
        password: config.get<string>('DB_PASSWORD') ?? 'app-local',
        autoLoadEntities: true,
        synchronize: false,
        migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
        migrationsRun: true,
      }),
    }),
    AuthModule, 
    EstadoModule, 
    SolicitacoesModule]
    ,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
