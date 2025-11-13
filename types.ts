export interface Experience {
  role: string;
  context: string;
  duration: string;
  description: string;
  // FIX: Added optional imageUrl property to match the data structure in App.tsx and resolve type errors.
  imageUrl?: string;
}
