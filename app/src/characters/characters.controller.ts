import {
  Controller,
  Get,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Character } from '@prisma/client';
import { CreateCharacterDto } from './dto/inputData';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get(':id')
  async findCharacterById(
  @Param('id') id: string,
  ): Promise<Character> {
    return this.charactersService.character(Number(id));
  }

  @Get()
  async characters(): Promise<Character[]> {
    return this.charactersService.characters();
  }

  @Post()
  async createCharacter(
    @Body() createCharacterDto: CreateCharacterDto,
  ): Promise<Character> {
    return this.charactersService.createCharacter(createCharacterDto);
  }
}
