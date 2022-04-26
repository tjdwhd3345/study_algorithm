function getGcd(w, h) {
  const mod = w % h;
  return mod === 0 ? h : getGcd(h, mod);
}
function solution(w, h) {
  /**
   * 사각형의 대각선을 지나는 단위 사각형을 구하는 공식
   * W + H - (W, H의 최대공약수)
   * -> 최대공약수는 유클리드 호제법으로 구한다.
   * 사각형의 대각선을 구하는 공식을 모르면 거의 풀기 어려운 문제.. 이런 문제가 level 2 라니
   * 전체 갯수에서 대각선을 지나는 사각형의 수를 뺀 값을 반환한다.
   */

  const gcd = getGcd(w, h);

  return w * h - (w + h - gcd);
}

solution(8, 12);
