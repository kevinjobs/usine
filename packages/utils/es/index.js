/**
 * 首选值在给定区间内，返回首选值；
 * 小于最小值，返回最小值；
 * 大于最小值，返回最大值。
 * @param min 区间最小值
 * @param value 首选值
 * @param max 区间最大值
 * @returns 最终结果
 */
function clamp(min, value, max) {
    return Math.min(Math.max(min, value), max);
}

export { clamp };
