import { Controller, Get, Post, Body, Param, Delete, HttpStatus, Res, Put } from '@nestjs/common';
import logger from 'src/logger';
import { DrugService } from './drug.service';
import { CreateDrugDto } from './dto/create-drug.dto';
import { Response } from 'express';
@Controller('drug')
export class DrugController {
  constructor(private readonly drugService: DrugService) {}

  @Post()
  async create(@Body() createDrugDto: CreateDrugDto, @Res() res: Response) {
    try {
      logger.info('[DrugController:create], init', { createDrugDto });
      const drug = await this.drugService.create(createDrugDto);
      return res.status(HttpStatus.OK).send(drug)
    } catch (error) {
      logger.error('[DrugController:create], error', { createDrugDto, error });
      return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Somenthing went wrong' })
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      logger.info('[DrugController:findAll], init');
      const drugs = await this.drugService.findAll();
      return res.status(HttpStatus.OK).send(drugs)
    } catch (error) {
      logger.error('[DrugController:findAll], error', { error });
      return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Somenthing went wrong' })
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      logger.info('[DrugController:findOne], init');
      const drug = await this.drugService.findOne(id);
      if (!drug) return res.status(HttpStatus.NOT_FOUND).send({message: 'Drug not found'})
      return res.status(HttpStatus.OK).send(drug)
    } catch (error) {
      logger.error('[DrugController:findOne], error', { error });
      return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Somenthing went wrong' })
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDrugDto: any, @Res() res: Response) {
    try {
      logger.info('[DrugController:update], init');
      const findDrug = await this.drugService.findOne(id);
      if (!findDrug) return res.status(HttpStatus.NOT_FOUND).send({message: 'Drug not found'})
      const drug = await this.drugService.update(id, updateDrugDto);
      return res.status(HttpStatus.OK).send({message: 'Drug updated succesfully'})
    } catch (error) {
      logger.error('[DrugController:update], error', { error });
      return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Somenthing went wrong' })
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Res() res: Response) {
    try {
      logger.info('[DrugController:remove], init');
      const findDrug = await this.drugService.findOne(id);
      if (!findDrug) return res.status(HttpStatus.NOT_FOUND).send({message: 'Drug not found'})
      const drug = await this.drugService.remove(id);
      return res.status(HttpStatus.OK).send(drug)
    } catch (error) {
      logger.error('[DrugController:remove], error', { error });
      return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Somenthing went wrong' })
    }
  }
}
