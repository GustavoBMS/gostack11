// insert a new type on Express, in this case is user
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
