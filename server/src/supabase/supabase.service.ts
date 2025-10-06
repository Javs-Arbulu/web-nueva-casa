import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly logger = new Logger(SupabaseService.name);
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_ANON_KEY');

    if (!supabaseUrl || !supabaseKey) {
      this.logger.error('Supabase URL and API Key must be provided');
      throw new Error('Supabase configuration is missing');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
    this.logger.log('Supabase client initialized successfully');
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }

  // Método de utilidad para obtener datos
  async select(table: string, columns = '*', filters?: any) {
    let query = this.supabase.from(table).select(columns);

    if (filters) {
      Object.keys(filters).forEach((key) => {
        query = query.eq(key, filters[key]);
      });
    }

    return query;
  }

  // Método de utilidad para insertar datos
  async insert(table: string, data: any) {
    return this.supabase.from(table).insert(data).select();
  }

  // Método de utilidad para actualizar datos
  async update(table: string, data: any, filters: any) {
    let query = this.supabase.from(table).update(data);

    Object.keys(filters).forEach((key) => {
      query = query.eq(key, filters[key]);
    });

    return query.select();
  }

  // Método de utilidad para eliminar datos
  async delete(table: string, filters: any) {
    let query = this.supabase.from(table).delete();

    Object.keys(filters).forEach((key) => {
      query = query.eq(key, filters[key]);
    });

    return query;
  }
}
