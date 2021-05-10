import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindCommentsUseCase } from "./FIndCommentsUseCase";

class FindCommentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findCommentsUseCase = container.resolve(FindCommentsUseCase);

    const comments = await findCommentsUseCase.execute();

    return response.json(comments);
  }
}

export { FindCommentsController };
