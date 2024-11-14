export enum ScorePointType {
  OK = 'OK',
  BAD = 'BAD',
}

export const ScorePoint = {
  [ScorePointType.OK]: 10,
  [ScorePointType.BAD]: -5,
};
