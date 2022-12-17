import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateVaccinationDto } from './dto/create-vaccination.dto';
import { Vaccination } from './entities/vaccination.entity';

@Injectable()
export class VaccinationService {
  constructor(
    @Inject('VACCINATION_REPOSITORY')
    private vaccinationRepository: Repository<Vaccination>,
  ) {}

  create(createVaccinationDto: CreateVaccinationDto) {
    const vaccination = this.vaccinationRepository.create(createVaccinationDto);
    return this.vaccinationRepository.save(vaccination);
  }

  findAll() {
    return this.vaccinationRepository.find({
      relations: ['drug']
    });
  }

  findOne(id: number) {
    return this.vaccinationRepository.findOne({ where: { id }, relations: ['drug'] });
  }

  update(id: number, updateVaccinationDto: any) {
    return this.vaccinationRepository.update(id, updateVaccinationDto)
  }

  remove(id: number) {
    return this.vaccinationRepository.softDelete(id);
  }
}
