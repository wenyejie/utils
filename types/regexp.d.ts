export declare const rHttps: RegExp;
export declare const rHttp: RegExp;
export declare const rIOSDateStringFormat: RegExp;
export declare const rInteger: RegExp;
export declare const rMobilePhone: RegExp;
export declare const rTelephone: RegExp;
export declare const rPhone: RegExp;
export declare const rIDCardNO: RegExp;
export declare const rBankCardNO: RegExp;
export declare const rChinese: RegExp;
export declare const rChineseName: RegExp;
export declare const rEmail: RegExp;
export declare const rUrl: RegExp;
export declare const rEmoji: RegExp;
export declare const rPostcode: RegExp;
export declare const rAmount: RegExp;
/**
 * 限制金额输入, 即匹配到不合法的金额输入
 * 如: 00.11 -> 0.11, 011.11 -> 11.11, 11.110 -> 11.11
 * 推荐用法, amount.replace(rLimitAmount, '')
 * 当然可以以此来校验输入是否符合金额规则, !rLimitAmount.test(amount)
 */
