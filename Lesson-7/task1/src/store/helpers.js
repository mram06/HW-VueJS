export function getScoreIn5Category(score) {
  let res;
  if (score >= 10) res = 5;
  else if (score >= 7) res = 4;
  else if (score >= 5) res = 3;
  else res = 2;
  return res;
}
