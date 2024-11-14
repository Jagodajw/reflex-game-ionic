export interface GameScoreResult {
  data: {
    attributes: {
      createdAt: Date;
      publishedAt: Date;
      score: number;
      updatedAt: Date;
      user_id: number;
      username: string;
    };
    id: string;
  }[];
  meta: {
    pagination: {
      limit: number;
      start: number;
      total: number;
    };
  };
}
export interface RankingUsersResult {
  username: string;
  score: number;
}

export interface AddUserScore {
  data: {
    username: string;
    score: number;
    user_id: string;
  };
}
