export interface Post {
  id: string;
}

export interface PostData extends Post {
  date: string;
  title: string;
  hideTopButton?: boolean;
}

export interface FullPost extends PostData {
  contentHtml?: any;
}
