import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService, PrismaService]
})
export class CharactersModule {}
