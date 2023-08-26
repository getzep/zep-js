/* eslint-disable camelcase */
import { toDictFilterEmpty } from "./utils";

export interface IUser {
   uuid?: string;
   id?: number;
   created_at?: Date;
   updated_at?: Date;
   deleted_at?: Date;
   user_id: string;
   email?: string;
   first_name?: string;
   last_name?: string;
   metadata?: Record<string, any>;
}

export class User implements IUser {
   uuid?: string;

   id?: number;

   created_at?: Date;

   updated_at?: Date;

   deleted_at?: Date;

   user_id: string;

   email?: string;

   first_name?: string;

   last_name?: string;

   metadata?: Record<string, any>;

   constructor({
      user_id,
      uuid,
      id,
      created_at,
      updated_at,
      deleted_at,
      email,
      first_name,
      last_name,
      metadata,
   }: {
      user_id: string;
      uuid?: string;
      id?: number;
      created_at?: Date;
      updated_at?: Date;
      deleted_at?: Date;
      email?: string;
      first_name?: string;
      last_name?: string;
      metadata?: Record<string, any>;
   }) {
      this.user_id = user_id;
      this.uuid = uuid;
      this.id = id;
      this.created_at = created_at;
      this.updated_at = updated_at;
      this.deleted_at = deleted_at;
      this.email = email;
      this.first_name = first_name;
      this.last_name = last_name;
      this.metadata = metadata;
   }

   toDict(): IUser {
      return toDictFilterEmpty(this);
   }
}

export interface ICreateUserRequest {
   user_id: string;
   email?: string;
   first_name?: string;
   last_name?: string;
   metadata?: Record<string, any>;
}

export class CreateUserRequest implements ICreateUserRequest {
   user_id: string;

   email?: string;

   first_name?: string;

   last_name?: string;

   metadata?: Record<string, any>;

   constructor({
      user_id,
      email,
      first_name,
      last_name,
      metadata,
   }: {
      user_id: string;
      email?: string;
      first_name?: string;
      last_name?: string;
      metadata?: Record<string, any>;
   }) {
      this.user_id = user_id;
      this.email = email;
      this.first_name = first_name;
      this.last_name = last_name;
      this.metadata = metadata;
   }

   toDict(): ICreateUserRequest {
      return toDictFilterEmpty(this);
   }
}

export interface IUpdateUserRequest {
   uuid?: string;
   user_id: string;
   email?: string;
   first_name?: string;
   last_name?: string;
   metadata?: Record<string, any>;
}

export class UpdateUserRequest implements IUpdateUserRequest {
   uuid?: string;

   user_id: string;

   email?: string;

   first_name?: string;

   last_name?: string;

   metadata?: Record<string, any>;

   constructor({
      uuid,
      user_id,
      email,
      first_name,
      last_name,
      metadata,
   }: {
      uuid?: string;
      user_id: string;
      email?: string;
      first_name?: string;
      last_name?: string;
      metadata?: Record<string, any>;
   }) {
      this.uuid = uuid;
      this.user_id = user_id;
      this.email = email;
      this.first_name = first_name;
      this.last_name = last_name;
      this.metadata = metadata;
   }

   toDict(): IUpdateUserRequest {
      return toDictFilterEmpty(this);
   }
}
