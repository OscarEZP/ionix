import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res, Put } from '@nestjs/common';
import { VaccinationService } from './vaccination.service';
import logger from 'src/logger';
import { Response } from 'express';


@Controller('vaccination')
export class VaccinationController {
  constructor(private readonly vaccinationService: VaccinationService) {}

  @Post()
  async create(@Body() createVaccinationDto: any, @Res() res: Response) {
    try {
      logger.info('[VaccinationController:create], init', { createVaccinationDto });
      const vaccination = await this.vaccinationService.create(createVaccinationDto);
      return res.status(HttpStatus.OK).send(vaccination)
    } catch (error) {
      logger.error('[VaccinationController:create], error', { createVaccinationDto, error });
      return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Somenthing went wrong' })
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      logger.info('[VaccinationController:findAll], init');
      const vaccination = await this.vaccinationService.findAll();
      return res.status(HttpStatus.OK).send(vaccination)
    } catch (error) {
      logger.error('[VaccinationController:findAll], error', { error });
      return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Somenthing went wrong' })
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      logger.info('[VaccinationController:findOne], init');
      const vaccination = await this.vaccinationService.findOne(id);
      if (!vaccination) return res.status(HttpStatus.NOT_FOUND).send({message: 'Vaccination not found'})
      return res.status(HttpStatus.OK).send(vaccination)
    } catch (error) {
      logger.error('[VaccinationController:findOne], error', { error });
      return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Somenthing went wrong' })
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateVaccinationDto: any, @Res() res: Response) {
    try {
      logger.info('[VaccinationController:update], init');
      const findVaccination = await this.vaccinationService.findOne(id);
      if (!findVaccination) return res.status(HttpStatus.NOT_FOUND).send({message: 'Vaccination not found'})
      await this.vaccinationService.update(id, updateVaccinationDto);
      return res.status(HttpStatus.OK).send({message: 'Vaccination updated succesfully'})
    } catch (error) {
      logger.error('[VaccinationController:update], error', { error });
      return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Somenthing went wrong' })
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Res() res: Response) {
    try {
      logger.info('[VaccinationController:remove], init');
      const findVaccination = await this.vaccinationService.findOne(id);
      if (!findVaccination) return res.status(HttpStatus.NOT_FOUND).send({message: 'Vaccination not found'})
      const vaccination = await this.vaccinationService.remove(id);
      return res.status(HttpStatus.OK).send(vaccination)
    } catch (error) {
      logger.error('[VaccinationController:remove], error', { error });
      return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Somenthing went wrong' })
    }
  }
}
