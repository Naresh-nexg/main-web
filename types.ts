// Fix: Add LanguageCode and Language types to resolve import errors.
export type LanguageCode = 'en' | 'ta' | 'te' | 'kn' | 'ml';

export interface Language {
  code: LanguageCode;
  name: string;
}

export interface PassionRecommendation {
  passion: string;
  description: string;
  skills_to_develop: string[];
  potential_careers: string[];
  learning_resources_suggestions: string[];
}

export interface GeminiResponse {
  recommendations: PassionRecommendation[];
}
