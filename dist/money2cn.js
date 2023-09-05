import { toNumber as s } from "./toNumber.js";
import "./isNumber.js";
import "./isString.js";
import "./toRawType.js";
import "./toTypeString.js";
import "./objectToString.js";
import "./decapitalize.js";
const g = ["角", "分"], p = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"], m = ["", "拾", "佰", "仟"], a = ["", "万", "亿"], f = /零[拾佰仟]/g, u = /零+([万亿])/g, d = /零{2,}/, N = (o) => {
  o = s(o);
  let c;
  const e = o.toString().replace(/\.\d+$/, "").split(""), i = o.toString().replace(/^\d+\.?/, "").split("");
  for (let t = e.length - 1, l = 0; t >= 0; t--, l++)
    e[t] === "0" && t > 0 && t < e.length - 1 ? e[t] = "零" : e[t] = p[e[t]] + m[l % 4], e[t] += l % 4 === 0 ? a[l / 4] : "";
  for (let t = 0; t < i.length; t++)
    i[t] !== "0" ? i[t] = p[i[t]] + g[t] : i[t] = "";
  let r = e.join("").replace(f, "").replace(u, "$1").replace(d, "零");
  r.length > 1 && (r = r.replace(/零$/, "")), r.length >= 1 && (r += "元");
  let n = i.join("");
  return n === "" ? n = "整" : r = r.replace(/^零元$/, ""), c = r + n, c;
};
export {
  N as default,
  N as money2cn
};
