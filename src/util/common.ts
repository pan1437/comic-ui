const commonPre = 'comic';

// css 前缀类名统一
export const getClassPrefix = (suffix: string) => `${commonPre}-${suffix}`;
