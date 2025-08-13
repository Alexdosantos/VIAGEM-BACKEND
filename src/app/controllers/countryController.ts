import { CountryService } from "@app/services/countryService";
import { Request, Response } from "express";

export class CountryController {
  constructor(private countryService: CountryService) {}

  async create(req: Request, res: Response) {
    const result = await this.countryService.create(req.body);
    return res.status(201).json(result);
  }

  async findAll(req: Request, res: Response) {
    const result = await this.countryService.findAll();
    return res.status(200).json(result);
  }
  async findById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const result = await this.countryService.findById(id);
    return res.status(200).json(result);
  }

  async findByCca2(req: Request, res: Response) {
    const cca2 = req.params.cca2;
    const result = await this.countryService.findByCca2(cca2);
    return res.status(200).json(result);
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const result = await this.countryService.update(id, req.body);
    return res.status(200).json(result);
  }

  async deleteById(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    await this.countryService.deleteById(id);
    return res.status(200).json({ message: "Country deleted successfully" });
  }

  async deleteByCca2(req: Request, res: Response) {
    const cca2 = req.params.cca2;

    await this.countryService.deleteByCca2(cca2);
    return res.status(200).json({ message: "Country deleted successfully" });
  }
}
