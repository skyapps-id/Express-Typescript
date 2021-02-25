import { Get, Route, Tags, Post as PostMethod, Put, Delete, Body, Path } from "tsoa";
import { Post } from "../models";
import {
  createPost,
  getPosts,
  IPostPayload,
  getPost,
  updatePost,
  deletePost,
} from "../repositories/post.repository";

@Route("posts")
@Tags("Post")
export default class PostController {
  @Get("")
  public async getPosts(): Promise<Array<Post>> {
    return getPosts();
  }

  @PostMethod("/")
  public async createPost(@Body() body: IPostPayload): Promise<Post> {
    return createPost(body);
  }

  @Get("/:id")
  public async getPost(@Path() id: string): Promise<Post | null> {
    return getPost(Number(id));
  }

  @Put("/:id")
  public async updatePost(@Path() id: string, @Body() body: IPostPayload): Promise<Post | null> {
    return updatePost(Number(id), body);
  }

  @Delete("/:id")
  public async deletePost(@Path() id: string): Promise<Post | null> {
    return deletePost(Number(id));
  }
}