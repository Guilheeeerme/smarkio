import { inject, injectable } from "tsyringe";

import { Comment } from "../../entities/Comment";
import { ICommentsRepository } from "../../repositories/ICommentsRepository";

@injectable()
class FindOneCommentUseCase {
  constructor(
    @inject("CommentsRepository")
    private commentsRepository: ICommentsRepository
  ) {}

  async execute(comment_id: string): Promise<Comment> {
    const comment = await this.commentsRepository.findOne(comment_id);

    return comment;
  }
}

export { FindOneCommentUseCase };
