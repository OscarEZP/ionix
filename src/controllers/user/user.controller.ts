import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import logger from 'src/logger';
import { Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      logger.info('[UserController:create], init', { createUserDto });
      const signup = await this.userService.signup(createUserDto);
      return res.status(HttpStatus.OK).send(signup)
    } catch (error) {
      logger.error('[UserController:create], error', { createUserDto, error });
      return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Somenthing went wrong' })
    }
  }

  @Post('login')
  async login(@Body() body: { email: string, password: string }, @Res() res: Response) {
    logger.info('[UserController:login], init', { body });
    try {
      const user = await this.userService.findByEmail(body.email);
      if (user) {
        const jwtToken = jwt.sign({ email: user.email, id: user.id, name: user.name }, 'secret', { expiresIn: '1h' });
        return res.status(HttpStatus.OK).send({ idToken: jwtToken });
      }

      return res.status(HttpStatus.CONFLICT).send({ message: 'Email or Password are wrong' });
    } catch (error) {
      logger.error('[UserController:login], init', { body, error });
      return res.status(HttpStatus.BAD_GATEWAY).send({ message: 'Somenthing went wrong' });
    }
  }
}
