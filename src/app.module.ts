import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainModule } from './blockchain/blockchain.module'; // ⭐ TAMBAH INI

@Module({
  imports: [BlockchainModule], // ⭐ TAMBAH INI
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}