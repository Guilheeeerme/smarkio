import { inject, injectable } from "tsyringe";
import { Comment } from "../../entities/Comment";

import { ICommentsRepository } from "../../repositories/ICommentsRepository";

@injectable()
class FindCommentsUseCase {
  constructor(
    @inject("CommentsRepository")
    private commentsRepository: ICommentsRepository
  ) {}

  async execute(): Promise<Comment[]> {
    const comments = await this.commentsRepository.find();

    return comments;
  }
}

export { FindCommentsUseCase };
