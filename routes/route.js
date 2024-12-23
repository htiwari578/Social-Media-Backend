import express from "express"

const router = express.Router();

const baseURL = "api/v1"

router.use(`/${baseURL}/users`, useRoutes);