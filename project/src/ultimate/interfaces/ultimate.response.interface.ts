export interface Intent {
  confidence: number;
  name: string;
}

export interface IntentResponse {
  intents: Intent[];
}
