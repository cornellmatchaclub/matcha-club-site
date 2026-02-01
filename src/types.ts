
export type ModalType = 'recipe' | 'whisk' | null;
export type ViewType = 'shelf' | 'events' | 'about' | 'calendar' | 'gallery' | 'instagram';

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface Recipe {
  title: string;
  ingredients: string[];
  steps: string[];
}
