import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: AppConfig = environment;

  constructor() { }

  get portfolioTitle(): string {
    return this.config.portfolioTitle;
  }

  get portfolioDescription(): string {
    return this.config.portfolioDescription;
  }

  get social() {
    return this.config.social;
  }

  get isProduction(): boolean {
    return this.config.production;
  }

  get apiUrl(): string {
    return this.config.apiUrl;
  }
}
