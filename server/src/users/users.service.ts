import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll(): Promise<User[]> {
    try {
      const { data, error } = await this.supabaseService.select('users');

      if (error) {
        this.logger.error('Error fetching users:', error);
        throw error;
      }

      return (data as unknown as User[]) || [];
    } catch (error) {
      this.logger.error('Error in findAll:', error);
      throw error;
    }
  }

  async findOne(id: number): Promise<User | null> {
    try {
      const { data, error } = await this.supabaseService.select('users', '*', {
        id,
      });

      if (error) {
        this.logger.error('Error fetching user:', error);
        throw error;
      }

      return (data as unknown as User[])?.[0] || null;
    } catch (error) {
      this.logger.error('Error in findOne:', error);
      throw error;
    }
  }

  async create(
    userData: Omit<User, 'id' | 'created_at' | 'updated_at'>,
  ): Promise<User> {
    try {
      const { data, error } = await this.supabaseService.insert('users', {
        ...userData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      if (error) {
        this.logger.error('Error creating user:', error);
        throw error;
      }

      return (data as unknown as User[])?.[0] || null;
    } catch (error) {
      this.logger.error('Error in create:', error);
      throw error;
    }
  }

  async update(id: number, userData: Partial<User>): Promise<User | null> {
    try {
      const { data, error } = await this.supabaseService.update(
        'users',
        {
          ...userData,
          updated_at: new Date().toISOString(),
        },
        { id },
      );

      if (error) {
        this.logger.error('Error updating user:', error);
        throw error;
      }

      return (data as unknown as User[])?.[0] || null;
    } catch (error) {
      this.logger.error('Error in update:', error);
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const { error } = await this.supabaseService.delete('users', { id });

      if (error) {
        this.logger.error('Error deleting user:', error);
        throw error;
      }
    } catch (error) {
      this.logger.error('Error in remove:', error);
      throw error;
    }
  }
}
