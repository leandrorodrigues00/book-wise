import { CategoriesOnBooks, Rating, User } from "@prisma/client";

export interface BookConfig {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: string;
}

export interface RatingConfig {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  book_id: string;
  userId: string;
  book: BookConfig;
  user: User;
}

export interface BookWithRatingConfig extends BookConfig {
  avgRating: number;
}

export interface CategoryConfig {
  id: string;
  name: string;
}

export interface BookWithCategoryConfig extends BookWithRatingConfig {
  categories: {
    book_id: string;
    categoryId: string;
  }[];
}

export type RatingWithAuthorConfig = Rating & {
  user: User;
};

export interface BookDetailsConfig extends BookWithCategoryConfig {
  ratings: Array<RatingWithAuthorConfig>;
  categories: Array<
    CategoriesOnBooks & {
      category: CategoryConfig;
    }
  >;
}

export interface UserProfileConfig {
  readPages: number;
  ratedBooks: number;
  readAuthors: number;
  mostReadCategory?: string;
  user: Pick<User, "name" | "image" | "id"> & {
    member_since: string;
  };
  ratings: Array<ProfileRatingConfig>;
}

export interface ProfileRatingConfig
  extends Pick<
    RatingConfig,
    "id" | "rate" | "description" | "created_at" | "book_id" | "userId"
  > {
  book: BookConfig & {
    categories: Array<
      CategoriesOnBooks & {
        category: CategoryConfig;
      }
    >;
  };
}
