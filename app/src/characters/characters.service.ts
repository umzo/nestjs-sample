import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { Character, Prisma } from '@prisma/client';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}

  async character(
    id: number,
  ): Promise<Character | null> {
    return this.prisma.character.findUnique({
      where: { id }
    });
  }

  async characters(): Promise<Character[]> {
    return this.prisma.character.findMany();
  }

  async createCharacter(data: Prisma.CharacterCreateInput): Promise<Character> {
    return this.prisma.character.create({
      data,
    });
  }
}
