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

  async findByUsername(username) {
    return await this.knex('tb_user_account').where('username', username).first();
  }
}