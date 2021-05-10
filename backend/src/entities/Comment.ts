import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  comment: string;

  @Column()
  comment_url: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Comment };
