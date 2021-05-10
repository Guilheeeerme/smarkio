import { Router } from "express";

import { CreateCommentController } from "../useCases/comments/CreateCommentController";
import { FindOneCommentController } from "../useCases/comments/FindOneCommentController";
import { FindCommentsController } from "../useCases/comments/FindCommentsController";

const router = Router();

const createCommentController = new CreateCommentController();
const findOneCommentController = new FindOneCommentController();
const findCommentsController = new FindCommentsController();

router.post("/comments", createCommentController.handle);

router.get("/comments", findCommentsController.handle);
router.get("/comments/:id", findOneCommentController.handle);

export { router };
