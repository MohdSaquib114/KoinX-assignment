import  express from 'express'
import statsRouter from "./stats.js"
import deviationRouter from "./deviation.js"
export const router = express.Router();

router.use("/stats",statsRouter)
router.use("/deviation",deviationRouter)

  