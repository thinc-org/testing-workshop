import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { CashService } from 'src/cash/cash.service'
import { Cash } from 'src/schemas/cash.schema'

@Controller('cash')
export class CashController {
  constructor(private readonly cashService: CashService) {}

  @Get()
  async getAllUserInfo(@Res() res: Response) {
    const allInfo = await this.cashService.getAllUserInfo()
    res.json(allInfo)
  }

  @Get(':userId')
  async getUserInfo(@Res() res: Response, @Param('userId') id: string) {
    const info = await this.cashService.getUserInfo(id)
    res.json(info)
  }

  @Post()
  async createUser(@Res() res: Response, @Body() userInfo: Cash) {
    const info = await this.cashService.createUser(userInfo)
    res.json(info)
  }

  @Patch(':userId')
  async updateBalance(
    @Res() res: Response,
    @Body('amount') amount: number,
    @Param('userId') userId: string,
  ) {
    const info = await this.cashService.updateUserBalance(userId, amount)
    res.json(info)
  }
}
