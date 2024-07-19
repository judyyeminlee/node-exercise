import express from "express";
import employees from "../controllers/employees.controller.js";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = id ? await employees.findOne(id) : await employees.findAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const employeeDTO = req.body;
    if (!employeeDTIO || Object.keys(employeeDTO).length === 0) {
      return res.status(400).json({ error: "Employee data is required" });
    }
    const data = await employees.addOne(employeeDTO);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeDTO = req.body;
    const data = await employees.updateOne(id, employeeDTO);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await employees.removeOne(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
