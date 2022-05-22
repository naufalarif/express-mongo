import exress from 'express';

const router = exress.Router();

import { addFood, getFoodList, getDetailFood, updateFood, deleteFood } from '../../controllers';

router.get("/", getFoodList);
router.get("/:id", getDetailFood);
router.post("/add", addFood);
router.patch("/update/:id", updateFood);
router.delete("/delete/:id", deleteFood);

const FoodRouter = router;
export default FoodRouter;