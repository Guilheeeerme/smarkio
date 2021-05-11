import { inject, injectable } from "tsyringe";

import { Comment } from "../../entities/Comment";
import { ICommentsRepository } from "../../repositories/ICommentsRepository";

@injectable()
class CreateCommentUseCase {
  constructor(
    @inject("CommentsRepository")
    private commentsRepository: ICommentsRepository
  ) {}

  async execute(comment: string, comment_url: string): Promise<Comment> {
    const comment_ = await this.commentsRepository.create(comment, comment_url);

    return comment_;
  }
}

export { CreateCommentUseCase };
