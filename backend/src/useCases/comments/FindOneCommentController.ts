import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "../../errors/AppError";
import { FindOneCommentUseCase } from "./FindOneCommentUseCase";

class FindOneCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOneCommentUseCase = container.resolve(FindOneCommentUseCase);

    const comment = await findOneCommentUseCase.execute(id);

    if (!comment) {
      throw new AppError(404);
    }

    return response.json(comment);
  }
}

export { FindOneCommentController };
