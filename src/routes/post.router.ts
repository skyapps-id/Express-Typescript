import express from "express";
import PostController from "../controllers/post.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new PostController();
  const response = await controller.getPosts();
  return res.status(201).send(response);
});

router.post("/", async (req, res) => {
  const controller = new PostController();
  const response = await controller.createPost(req.body);
  if (response.message) return res.status(502).send({ message: response.message });
  return res.status(200).send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new PostController();
  const response = await controller.getPost(req.params.id);
  if (!response) return res.status(404).send({ message: "No post found" });
  return res.send(response);
});

router.put("/:id", async (req, res) => {
  const controller = new PostController();
  const response = await controller.updatePost(req.params.id, req.body);
  if (!response) return res.status(404).send({ message: "No post found" });
  return res.status(200).send({ message: "Updated" });
});

router.delete("/:id", async (req, res) => {
  const controller = new PostController();
  const response = await controller.deletePost(req.params.id);
  if (!response) return res.status(404).send({ message: "No post found" });
  return res.status(200).send({ message: "Deleted" });
});

export default router;