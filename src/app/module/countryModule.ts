import { CountryController } from "@app/controllers/countryController";
import { CountryService } from "@app/services/countryService";
import { CountryRepository } from "@app/repositories/countryRepository";
import prisma from "src/prismaClient/client";

class CountryModule {
  static instance() {
    const countryRepository = new CountryRepository(prisma);
    const countryService = new CountryService(countryRepository);
    const countryController = new CountryController(countryService);
    return { countryController };
  }
}

export default CountryModule;
