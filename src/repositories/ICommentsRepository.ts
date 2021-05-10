import { Comment } from "../entities/Comment";

interface ICommentsRepository {
  create(comment: string, comment_url: string): Promise<Comment>;
  findOne(comment_id: string): Promise<Comment>;
  find(): Promise<Comment[]> | null;
}

export { ICommentsRepository };
