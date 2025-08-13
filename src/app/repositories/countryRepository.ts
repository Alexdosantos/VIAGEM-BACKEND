import { CountryDto } from "@app/dtos/country.dto";
import { PrismaClient } from "@prisma/client";
import { HttpError } from "src/utils/httpError";

export class CountryRepository {
  constructor(private prisma: PrismaClient) {}

  async create(country: CountryDto) {
    const countryExists = await this.prisma.country.findUnique({
      where: { cca2: country.cca2 },
    });
    if (countryExists) {
      throw new HttpError("Country already exists", 400);
    }
    const countryCreated = await this.prisma.country.create({ data: country });

    return countryCreated;
  }

  async findAll() {
    return this.prisma.country.findMany();
  }

  async findById(id: number) {
    const country = await this.prisma.country.findUnique({ where: { id } });
    if (!country) {
      throw new HttpError("Country not found", 404);
    }
    return country;
  }

  async findByCca2(cca2: string) {
    const country = await this.prisma.country.findUnique({ where: { cca2 } });
    if (!country) {
      throw new HttpError("Country not found", 404);
    }
    return country;
  }

  async update(id: number, country: CountryDto) {
    const countryExists = await this.prisma.country.findUnique({
      where: { id },
    });
    if (!countryExists) {
      throw new HttpError("Country not found", 404);
    }
    return await this.prisma.country.update({ where: { id }, data: country });
  }

  async deleteById(id: number) {
    const country = await this.prisma.country.delete({ where: { id } });
    if (!country) {
      throw new HttpError("Country not found", 404);
    }
    return country;
  }

  async deleteByCca2(cca2: string) {
    const country = await this.prisma.country.delete({ where: { cca2 } });
    if (!country) {
      throw new HttpError("Country not found", 404);
    }
    return country;
  }
}
