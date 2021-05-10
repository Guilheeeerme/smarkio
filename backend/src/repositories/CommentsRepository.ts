import { getRepository, Repository } from "typeorm";

import { Comment } from "../entities/Comment";
import { ICommentsRepository } from "./ICommentsRepository";

class CommentsRepository implements ICommentsRepository {
  private repository: Repository<Comment>;

  constructor() {
    this.repository = getRepository(Comment);
  }

  async create(comment: string, comment_url: string): Promise<Comment> {
    const comment_ = this.repository.create({
      comment,
      comment_url,
    });

    await this.repository.save(comment_);

    return comment_;
  }

  async findOne(comment_id: string): Promise<Comment> {
    const comment = await this.repository.findOne(comment_id);

    return comment;
  }

  async find(): Promise<Comment[]> {
    const comments = await this.repository.find();

    return comments;
  }
}

export { CommentsRepository };
