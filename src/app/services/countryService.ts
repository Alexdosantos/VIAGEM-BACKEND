import { CountryDto } from "@app/dtos/country.dto";
import { CountryRepository } from "@app/repositories/countryRepository";

export class CountryService {
  constructor(private countryRepository: CountryRepository) {}

  async create(countryDto: CountryDto) {
    return await this.countryRepository.create(countryDto);
  }
  async findAll() {
    return await this.countryRepository.findAll();
  }
  async findById(id: number) {
    return await this.countryRepository.findById(id);
  }

  async findByCca2(cca2: string) {
    return await this.countryRepository.findByCca2(cca2);
  }

  async update(id: number, countryDto: CountryDto) {
    return this.countryRepository.update(id, countryDto);
  }

  async deleteById(id: number) {
    return await this.countryRepository.deleteById(id);
  }

  async deleteByCca2(cca2: string) {
    return await this.countryRepository.deleteByCca2(cca2);
  }
}
