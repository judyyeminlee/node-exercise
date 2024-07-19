import express from "express";
// TODO: import router from users.route
import userRouter from "./users.route.js";
import employeesRouter from "./employees.routes.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"
router.use("/users", userRouter);
router.use("/employees", employeesRouter);

export default router;
