import { container } from "tsyringe";

import { ICommentsRepository } from "../repositories/ICommentsRepository";
import { CommentsRepository } from "../repositories/CommentsRepository";

container.registerSingleton<ICommentsRepository>(
  "CommentsRepository",
  CommentsRepository
);
