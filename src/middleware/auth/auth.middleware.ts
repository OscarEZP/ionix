import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const authorization = req.get("authorization");
    if (!authorization) {
      return res.status(401).json({ message: "Missing Authorization header" });
    }

    if (!authorization.startsWith("Bearer")) {
      return res.status(401).json({ message: "Malformed header" });
    }
    try {
      const token = authorization.split(" ")[1];
      var decoded = jwt.verify(token, 'secret');
      (req as any).user = decoded;
      next();
    } catch(err) {
      return res.status(401).json({ message: "Malformed header" });
    }
  }
}
