import { toNumber as g } from "./toNumber.js";
import "./isNumber.js";
import "./isString.js";
const p = ["角", "分"], s = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"], a = ["", "拾", "佰", "仟"], f = ["", "万", "亿"], m = /零[拾佰仟]/g, u = /零+([万亿])/g, d = /零{2,}/, j = (l) => {
  l = g(l);
  let c;
  const t = l.toString().replace(/\.\d+$/, "").split(""), i = l.toString().replace(/^\d+\.?/, "").split("");
  for (let e = t.length - 1, n = 0; e >= 0; e--, n++)
    t[e] === "0" && e > 0 && e < t.length - 1 ? t[e] = "零" : t[e] = s[t[e]] + a[n % 4], t[e] += n % 4 === 0 ? f[n / 4] : "";
  for (let e = 0; e < i.length; e++)
    i[e] !== "0" ? i[e] = s[i[e]] + p[e] : i[e] = "";
  let r = t.join("").replace(m, "").replace(u, "$1").replace(d, "零");
  r.length > 1 && (r = r.replace(/零$/, "")), r.length >= 1 && (r += "元");
  let o = i.join("");
  return o === "" ? o = "整" : r = r.replace(/^零元$/, ""), c = r + o, c;
};
export {
  j as default,
  j as money2cn
};
