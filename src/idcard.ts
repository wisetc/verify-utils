/**
 * 某人身份证推断是否已满n岁
 * @param idNum
 * @param n
 */
export function overNOld(idNum: string, n: number = 18) {
  if (!isIDCard(idNum)) return true;

  const age = getAgeFromIDNumber(idNum);
  return age >= n;
}

/**
 * 是否身份证号码
 */
export function isIDCard(idNum: string): boolean {
  const pattern = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
  return pattern.test(idNum);
}

/**
 * 根据中国居民身份证号获取该身份证人的年龄
 */
export function getAgeFromIDNumber(idNum: string): number {
  if (!isIDCard(idNum)) return 0;
  let result = /^\d{6}(\d{4})(\d{2})(\d{2})/.exec(idNum);
  if (result === null) return 0;
  let bornYear = Number(result[1]);
  let bornMonth = Number(result[2]);
  let bornDay = Number(result[3]);

  const date = new Date();
  const nowFullYear = date.getFullYear();
  const nowMonth = date.getMonth();
  const nowDay = date.getDate();
  const isFullYear =
    new Date(nowMonth, nowDay).getTime() >
    new Date(bornMonth - 1, bornDay).getTime();
  const gap = isFullYear ? 0 : -1;
  return Math.max(0, nowFullYear - bornYear + gap);
}
