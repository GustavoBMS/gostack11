import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '@modules/users/infra/typeorm/entities/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    // Check if email exists
    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email Adress already used');
    }

    // Create hash for password
    const hashedPassword = await hash(password, 8);

    // Create user
    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    // save user
    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
