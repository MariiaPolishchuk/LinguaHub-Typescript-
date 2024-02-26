export interface UserState {
    id: number;
    name: string;
    email: string;
  }
  
  export interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  export interface PostState {
    posts: Post[];
    loading: boolean;
    error: string | null;
  }
  
  export interface RootState {
    user: UserState;
    post: PostState;
  }
  