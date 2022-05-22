import exress from 'express';

const router = exress.Router();

import { addFood, getFoodList } from '../../controllers';

router.post("/add", addFood);
router.get("/", getFoodList);

const FoodRouter = router;
export default FoodRouter;