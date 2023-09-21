import { Injectable } from '@nestjs/common';
import {
  Intent,
  IntentResponse,
} from '../interfaces/ultimate.response.interface';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class UltimateService {
  constructor(private httpService: HttpService) {}

  /**
   * Get predicted intents for a visitor message and bot from Ultimate API.
   *
   * @param {{
   *     botId: string;
   *     message: string;
   *   }} {
   *     botId,
   *     message,
   *   }
   * @return {*}  {Observable<[Intent]>}
   * @memberof UltimateService
   */
  getPredictedIntent({
    botId,
    message,
  }: {
    botId: string;
    message: string;
  }): Observable<Intent[]> {
    const url = process.env.ULTIMATE_URI;
    const headers = {
      authorization: process.env.ULTIMATE_API_KEY_AUTH,
    };
    const data = {
      botId: botId,
      message: message,
    };
    //Things to improve with more time: Request to our PROVIDER to add an identifier to simplify the search at our IntentReplyData.
    try {
      return this.httpService
        .post(url, data, { headers })
        .pipe(
          map((response: { data: IntentResponse }) => response?.data.intents),
        );
    } catch (error) {
      //Things to improve with more time: A Error collection store in a real DB, to fix errors in the future.
      console.error('Error:', error);
    }
  }

  /**
   * Extract and ensures the highest confidence intent or null.
   *
   * @param {Intent[]} intents
   * @return {*}  {(Intent | null)}
   * @memberof UltimateService
   */
  extractTheHighestConfidenceIntent(intents: Intent[]): Intent | null {
    let highestConfidenceIntent: Intent = null;
    let highestConfidence = -1;
    for (const intent of intents) {
      if (intent.confidence > highestConfidence) {
        highestConfidence = intent.confidence;
        highestConfidenceIntent = intent;
      }
    }
    return highestConfidenceIntent;
  }
}
