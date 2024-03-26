export interface IPostsData {
  id: number;
  title: string;
  body: string;
  userId: string;
}
export interface IPostsResponse {
  data: IPostsData;
}
