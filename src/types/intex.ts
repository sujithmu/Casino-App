export type LoggedInResponse = {
  status: string;
  player: LoggedInUser;
};

export type LoggedInUser = {
  name: string;
  avatar: string;
  event: string;
};

export type LoggedInUserInfo = LoggedInUser & {
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