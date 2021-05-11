import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCommentUseCase } from "./CreateCommentUseCase";
import { IbmService } from "../IBM/WatsonService";
import { AppError } from "../../errors/AppError";

class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { comment } = request.body;

    if (!comment) {
      throw new AppError(400);
    }

    const ibmService = new IbmService();

    const file = await ibmService.getTextToSpeech(comment);

    // console.log(file);
    const comment_url = `http://localhost:3333/stream/tmp/${file}.wav`;

    const createCommentUseCase = container.resolve(CreateCommentUseCase);

    const commentCreated = await createCommentUseCase.execute(
      comment,
      comment_url
    );

    const mappedComment = {
      id: commentCreated.id,
      comment: commentCreated.comment,
      comment_url,
      created_at: commentCreated.created_at,
    };

    return response.status(201).json(mappedComment);
  }
}

export { CreateCommentController };
