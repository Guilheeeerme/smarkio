import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindOneCommentUseCase } from "./FindOneCommentUseCase";

class FindOneCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOneCommentUseCase = container.resolve(FindOneCommentUseCase);

    const comment = await findOneCommentUseCase.execute(id);

    return response.json(comment);
  }
}

export { FindOneCommentController };
