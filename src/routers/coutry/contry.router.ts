import { Router } from "express";
import CountryModule from "@app/module/countryModule";
import { asyncWrapper } from "src/middlewares/asyncWrapper";

const router = Router();
const { countryController } = CountryModule.instance();

router.post(
  "/create",
  asyncWrapper(countryController.create.bind(countryController))
);
router.get(
  "/all",
  asyncWrapper(countryController.findAll.bind(countryController))
);
router.get(
  "/all/cca2/:cca2",
  asyncWrapper(countryController.findByCca2.bind(countryController))
);
router.get(
  "/find/:id",
  asyncWrapper(countryController.findById.bind(countryController))
);
router.put(
  "/update/:id",
  asyncWrapper(countryController.update.bind(countryController))
);
router.delete(
  "/delete/:id",
  asyncWrapper(countryController.deleteById.bind(countryController))
);
router.delete(
  "/delete/cca2/:cca2",
  asyncWrapper(countryController.deleteByCca2.bind(countryController))
);

export default router;
