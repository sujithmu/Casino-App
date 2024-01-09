export type LoginResponse = {
  status: string;
  player: LogedInUser;
};

export type LogedInUser = {
  name: string;
  avatar: string;
  event: string;
};

export type LogedInUserInfo = LogedInUser & {
  username: string;
};

export type CategoryResponse = {
  id: number;
  name: string;
};

export type GameListResponse = {
  name: string;
  categoryIds: number[];
  code: string;
  description: string;
  icon: string;
};

export type FormData = {
  username: string;
  password: string;
}

export type FormErrors= {
  username: boolean;
  password: boolean;
}