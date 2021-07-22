import { Injectable, Dependencies } from '@nestjs/common';
import { KNEX_CONNECTION } from '../database/knex.providers';

@Injectable()
@Dependencies(KNEX_CONNECTION)
export class UsersService {
  constructor(knex) {
    this.knex = knex;
  }
  
  async findAll() {
    return await this.knex('tb_user_account');
  }

  /*

  findOne(id) {
    return this.userAccountRepository.findOne(id);
  }

  findByUsername(username) {
    return this.userAccountRepository.findOne({ username });
  }

  findAll() {
    return this.userAccountRepository.find();
  }

  async remove(id) {
    await this.userAccountRepository.delete(id);
  }
*/
}