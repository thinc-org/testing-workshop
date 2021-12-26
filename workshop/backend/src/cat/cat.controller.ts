import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common'
import { Response } from 'express'
import { Cat } from 'src/schemas/cat.schema'
import { CatService } from './cat.service'

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Res() res: Response): Promise<void> {
    const foundCats = await this.catService.findAllCats()
    res.json(foundCats)
  }

  @Get(':catId')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Res() res: Response,
    @Param('catId') catId: string,
  ): Promise<void> {
    const foundCat = await this.catService.findCat(catId)
    res.json(foundCat)
  }

  @Get('parent/:catId')
  @HttpCode(HttpStatus.OK)
  async findParent(
    @Res() res: Response,
    @Param('catId') catId: string,
  ): Promise<void> {
    const parents = await this.catService.findParentCats(catId)
    res.json(parents)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Res() res: Response, @Body() cat: Cat): Promise<void> {
    const createdCat = await this.catService.createCat(cat)
    res.json({ message: 'Create Success', cat: createdCat })
  }

  @Delete(':catId')
  @HttpCode(HttpStatus.ACCEPTED)
  async kill(
    @Res() res: Response,
    @Param('catId') catId: string,
  ): Promise<void> {
    await this.catService.killCat(catId)
    res.json({ message: 'Kill Success' })
  }

  @Delete()
  @HttpCode(HttpStatus.ACCEPTED)
  async clear(@Res() res: Response): Promise<void> {
    await this.catService.clearCats()
    res.json({ message: 'Kill All Success' })
  }
}
