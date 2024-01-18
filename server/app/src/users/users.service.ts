import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) 
  private usersRepository: Repository<User>) { }

  findAll() {
    return this.usersRepository.find();

  }
   findOne(id: number) {
    return  this.usersRepository.findOneBy({ id });
  }
 create(user: CreateUserInput) {
    return this.usersRepository.save(user);
  }

  async update(id: number, user: UpdateUserInput){
   const result =  await this.usersRepository.update(id, user);
   if (result.affected === 0){
      throw new BadRequestException(`User with id ${id} not found`);
   }
    return 'updated';
  }

  async remove(id: number) {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0){
      throw new BadRequestException(`User with id ${id} not found`);
   }
    return 'deleted';
    }
}
