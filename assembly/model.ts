import { PersistentUnorderedMap, context } from "near-sdk-as";

/** 
 * Exporting a new class PostedMessage so it can be used outside of this file.
 */
@nearBindgen
export class Score {
  value: u64;
  timestamp: u64;
  userId: string;

  public static fromPayload(payload: Score): Score {
    const score     = new Score();
    score.userId    = context.sender;
    score.value     = payload.value;
    score.timestamp = payload.timestamp;
    return score;
  }
}

export const listedScores = new PersistentUnorderedMap<string, Score>("SAVE_SCORE");