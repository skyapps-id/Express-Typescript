import express from "express";
import CommentController from "../controllers/comment.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new CommentController();
  const response = await controller.getComments();
  return res.status(201).send(response);
});

router.post("/", async (req, res) => {
  const controller = new CommentController();
  const response = await controller.createComment(req.body);
  if (response.message) return res.status(502).send({ message: response.message });
  return res.status(200).send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new CommentController();
  const response = await controller.getComment(req.params.id);
  if (!response) return res.status(404).send({ message: "No comment found" });
  return res.status(200).send(response);
});

router.put("/:id", async (req, res) => {
  const controller = new CommentController();
  const response = await controller.updateComment(req.params.id, req.body);
  if (!response) return res.status(404).send({ message: "No comment found" });
  return res.status(200).send({ message: "Updated" });
});

router.delete("/:id", async (req, res) => {
  const controller = new CommentController();
  const response = await controller.deleteComment(req.params.id);
  if (!response) return res.status(404).send({ message: "No comment found" });
  return res.status(200).send({ message: "Deleted" });
});

export default router;