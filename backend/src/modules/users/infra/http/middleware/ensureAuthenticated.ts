import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // Token JWT validation

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  // Separa o bearer do token em si
  const [, token] = authHeader.split(' ');

  const decoded = verify(token, authConfig.jwt.secret);

  // as enforces TokenPayload to use a different type
  const { sub } = decoded as TokenPayload;

  request.user = {
    id: sub,
  };

  return next();
}
