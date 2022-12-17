import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateDrugDto } from './dto/create-drug.dto';
import { Drug } from './entities/drug.entity';

@Injectable()
export class DrugService {
  constructor(
    @Inject('DRUG_REPOSITORY')
    private drugRepository: Repository<Drug>,
  ) {}

  create(createDrugDto: CreateDrugDto) {
    const drug = this.drugRepository.create(createDrugDto);
    return this.drugRepository.save(drug);
  }

  findAll() {
    return this.drugRepository.find();
  }

  findOne(id: number) {
    return this.drugRepository.findOne({ where: { id } });
  }

  update(id: number, updateDrugDto: any) {
    return this.drugRepository.update(id, updateDrugDto)
  }

  remove(id: number) {
    return this.drugRepository.softDelete(id);
  }
}
