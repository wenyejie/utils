"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("./arrDelItemByProp.cjs"),n=require("./arrDelItemByVal.cjs"),o=require("./arrDownItem.cjs"),a=require("./arrFindItemByProp.cjs"),c=require("./arrFindValByProp.cjs"),u=require("./arrUpItem.cjs"),l=require("./ban.cjs"),m=require("./bankCardFormat.cjs"),d=require("./base642file.cjs"),q=require("./cached.cjs"),p=require("./cachedOne.cjs"),S=require("./calcTextareaHeight.cjs"),b=require("./camelize.cjs"),h=require("./capitalize.cjs"),g=require("./checkIDNO.cjs"),y=require("./checkTaxpayerIDNO.cjs"),P=require("./clickOutside.cjs"),I=require("./clone.cjs"),O=require("./countdown.cjs"),N=require("./dateFormat.cjs"),D=require("./dateObj.cjs"),f=require("./datetimeSpan.cjs"),C=require("./dayEnd.cjs"),B=require("./dayStart.cjs"),F=require("./debounce.cjs"),E=require("./decapitalize.cjs"),x=require("./decimalLength.cjs"),w=require("./downloadBlob.cjs"),T=require("./downloadFile.cjs"),j=require("./each.cjs"),M=require("./emptyObject.cjs"),e=require("./env.cjs"),i=require("./exactMath.cjs"),v=require("./file2base64.cjs"),k=require("./freezeObj.cjs"),z=require("./getCSS.cjs"),V=require("./getDaysByMonth.cjs"),U=require("./getInfoByCardNO.cjs"),W=require("./getTsByStr.cjs"),A=require("./globalThis.cjs"),R=require("./hasFocus.cjs"),H=require("./hasOwn.cjs"),L=require("./hasOwnProperty.cjs"),J=require("./hasSuffix.cjs"),K=require("./hyphenate.cjs"),t=require("./imgCompress.cjs"),Y=require("./isArray.cjs"),G=require("./isArrayIndex.cjs"),Q=require("./isBigint.cjs"),X=require("./isBlob.cjs"),Z=require("./isBoolean.cjs"),_=require("./isComment.cjs"),$=require("./isDate.cjs"),ee=require("./isDefined.cjs"),re=require("./isElement.cjs"),ie=require("./isEmptyValue.cjs"),te=require("./isEvenNumber.cjs"),se=require("./isFalse.cjs"),ne=require("./isFunction.cjs"),oe=require("./isInteger.cjs"),ae=require("./isInvalidDate.cjs"),ce=require("./isJson.cjs"),ue=require("./isJsonString.cjs"),le=require("./isMap.cjs"),me=require("./isNaturalNumber.cjs"),de=require("./isNull.cjs"),qe=require("./isNumber.cjs"),pe=require("./isNumberString.cjs"),Se=require("./isObject.cjs"),be=require("./isOddNumber.cjs"),he=require("./isParentElement.cjs"),ge=require("./isPlainDate.cjs"),ye=require("./isPlainNumber.cjs"),Pe=require("./isPlainObject.cjs"),Ie=require("./isPlainString.cjs"),Oe=require("./isPositiveInteger.cjs"),Ne=require("./isPrimitive.cjs"),De=require("./isPromise.cjs"),fe=require("./isRegExp.cjs"),Ce=require("./isSameDay.cjs"),Be=require("./isSameHost.cjs"),Fe=require("./isSameMonth.cjs"),Ee=require("./isSameYear.cjs"),xe=require("./isSet.cjs"),we=require("./isString.cjs"),Te=require("./isSupportWebp.cjs"),je=require("./isSymbol.cjs"),Me=require("./isText.cjs"),ve=require("./isTrue.cjs"),ke=require("./isUndefined.cjs"),ze=require("./isWeakMap.cjs"),Ve=require("./isWeakSet.cjs"),Ue=require("./load.cjs"),We=require("./loadScript.cjs"),Ae=require("./local.cjs"),Re=require("./mobilePhoneFormat.cjs"),He=require("./money2cn.cjs"),Le=require("./moneyFormat.cjs"),Je=require("./monthRange.cjs"),Ke=require("./noop.cjs"),Ye=require("./nullProtoObject.cjs"),Ge=require("./objectLength.cjs"),Qe=require("./objectToString.cjs"),Xe=require("./once.cjs"),Ze=require("./padEnd.cjs"),_e=require("./padStart.cjs"),$e=require("./percentage.cjs"),er=require("./phoneNumFormat.cjs"),rr=require("./pick.cjs"),ir=require("./prefix.cjs"),tr=require("./publishSubscribe.cjs"),sr=require("./randomInteger.cjs"),nr=require("./randomNumber.cjs"),r=require("./regexp.cjs"),or=require("./removeSpace.cjs"),ar=require("./session.cjs"),cr=require("./setCSS.cjs"),ur=require("./spliceString.cjs"),lr=require("./storage.cjs"),mr=require("./suffix.cjs"),dr=require("./supportCSS.cjs"),qr=require("./swap.cjs"),pr=require("./throttle.cjs"),Sr=require("./timeDistance.cjs"),br=require("./toCSSUnit.cjs"),hr=require("./toDate.cjs"),gr=require("./toMultiKeyOneValue.cjs"),yr=require("./toNumber.cjs"),Pr=require("./toRawType.cjs"),Ir=require("./toTypeString.cjs"),Or=require("./unique.cjs"),Nr=require("./url2http.cjs"),Dr=require("./url2https.cjs"),fr="2.0.6";exports.arrDelItemByProp=s.arrDelItemByProp;exports.arrDelItemByVal=n.arrDelItemByVal;exports.arrDownItem=o.arrDownItem;exports.arrFindItemByProp=a.arrFindItemByProp;exports.arrFindValByProp=c.arrFindValByProp;exports.arrUpItem=u.arrUpItem;exports.ban=l.ban;exports.bankCardFormat=m.bankCardFormat;exports.base642file=d.base642file;exports.cached=q.cached;exports.cachedOne=p.cachedOne;exports.calcTextareaHeight=S.calcTextareaHeight;exports.camelize=b.camelize;exports.capitalize=h.capitalize;exports.checkIDNO=g.checkIDNO;exports.checkTaxpayerIDNO=y.checkTaxpayerIDNO;exports.clickOutside=P.clickOutside;exports.clone=I.clone;exports.countdown=O.countdown;exports.dateFormat=N.dateFormat;exports.dateObj=D.dateObj;exports.datetimeSpan=f.datetimeSpan;exports.dayEnd=C.dayEnd;exports.dayStart=B.dayStart;exports.debounce=F.debounce;exports.decapitalize=E.decapitalize;exports.decimalLength=x.decimalLength;exports.downloadBlob=w.downloadBlob;exports.downloadFile=T.downloadFile;exports.each=j.each;exports.emptyObject=M.emptyObject;exports.inBrowser=e.inBrowser;exports.inNode=e.inNode;exports.isAndroid=e.isAndroid;exports.isChrome=e.isChrome;exports.isEdge=e.isEdge;exports.isFirefox=e.isFirefox;exports.isIE=e.isIE;exports.isIE9=e.isIE9;exports.isIOS=e.isIOS;exports.isIPad=e.isIPad;exports.isIPhone=e.isIPhone;exports.isLinux=e.isLinux;exports.isMac=e.isMac;exports.isMobile=e.isMobile;exports.isPC=e.isPC;exports.isPhantom=e.isPhantom;exports.isSafari=e.isSafari;exports.isUbuntu=e.isUbuntu;exports.isWeChat=e.isWeChat;exports.isWindows=e.isWindows;exports.useragent=e.useragent;exports.add=i.add;exports.arithmetic=i.arithmetic;exports.divide=i.divide;exports.exactMath=i.exactMath;exports.multiAdd=i.multiAdd;exports.multiDivide=i.multiDivide;exports.multiMultiply=i.multiMultiply;exports.multiSubtract=i.multiSubtract;exports.multiply=i.multiply;exports.remain=i.remain;exports.subtract=i.subtract;exports.file2base64=v.file2base64;exports.freezeObj=k.freezeObj;exports.getCSS=z.getCSS;exports.getDaysByMonth=V.getDaysByMonth;exports.getInfoByCardNO=U.getInfoByCardNO;exports.getTsByStr=W.getTsByStr;Object.defineProperty(exports,"globalThis",{enumerable:!0,get:()=>A.globalThis});exports.hasFocus=R.hasFocus;exports.hasOwn=H.hasOwn;exports.hasOwnProperty=L.hasOwnProperty;exports.hasSuffix=J.hasSuffix;exports.hyphenate=K.hyphenate;exports.calcDrawSize=t.calcDrawSize;exports.canvas2file=t.canvas2file;exports.createCanvas=t.createCanvas;exports.file2img=t.file2img;exports.isArray=Y.isArray;exports.isArrayIndex=G.isArrayIndex;exports.isBigint=Q.isBigint;exports.isBlob=X.isBlob;exports.isBoolean=Z.isBoolean;exports.isComment=_.isComment;exports.isDate=$.isDate;exports.isDefined=ee.isDefined;exports.isElement=re.isElement;exports.isEmptyValue=ie.isEmptyValue;exports.isEvenNumber=te.isEvenNumber;exports.isFalse=se.isFalse;exports.isFunction=ne.isFunction;exports.isInteger=oe.isInteger;exports.isInvalidDate=ae.isInvalidDate;exports.isJson=ce.isJson;exports.isJsonString=ue.isJsonString;exports.isMap=le.isMap;exports.isNaturalNumber=me.isNaturalNumber;exports.isNull=de.isNull;exports.isNumber=qe.isNumber;exports.isNumberString=pe.isNumberString;exports.isObject=Se.isObject;exports.isOddNumber=be.isOddNumber;exports.isParentElement=he.isParentElement;exports.isPlainDate=ge.isPlainDate;exports.isPlainNumber=ye.isPlainNumber;exports.isPlainObject=Pe.isPlainObject;exports.isPlainString=Ie.isPlainString;exports.isPositiveInteger=Oe.isPositiveInteger;exports.isPrimitive=Ne.isPrimitive;exports.isPromise=De.isPromise;exports.isRegExp=fe.isRegExp;exports.isSameDay=Ce.isSameDay;exports.isSameHost=Be.isSameHost;exports.isSameMonth=Fe.isSameMonth;exports.isSameYear=Ee.isSameYear;exports.isSet=xe.isSet;exports.isString=we.isString;exports.isSupportWebp=Te.isSupportWebp;exports.isSymbol=je.isSymbol;exports.isText=Me.isText;exports.isTrue=ve.isTrue;exports.isUndefined=ke.isUndefined;exports.isWeakMap=ze.isWeakMap;exports.isWeakSet=Ve.isWeakSet;exports.load=Ue.load;exports.loadScript=We.loadScript;exports.local=Ae.local;exports.mobilePhoneFormat=Re.mobilePhoneFormat;exports.money2cn=He.money2cn;exports.moneyFormat=Le.moneyFormat;exports.monthRange=Je.monthRange;exports.noop=Ke.noop;exports.nullProtoObject=Ye.nullProtoObject;exports.objectLength=Ge.objectLength;exports.objectToString=Qe.objectToString;exports.once=Xe.once;exports.padEnd=Ze.padEnd;exports.padStart=_e.padStart;exports.percentage=$e.percentage;exports.phoneNumFormat=er.phoneNumFormat;exports.pick=rr.pick;exports.prefix=ir.prefix;exports.PublishSubscribe=tr.PublishSubscribe;exports.randomInteger=sr.randomInteger;exports.randomNumber=nr.randomNumber;exports.rAmount=r.rAmount;exports.rBankCardNO=r.rBankCardNO;exports.rChinese=r.rChinese;exports.rChineseName=r.rChineseName;exports.rEmail=r.rEmail;exports.rEmoji=r.rEmoji;exports.rHttp=r.rHttp;exports.rHttps=r.rHttps;exports.rIDCardNO=r.rIDCardNO;exports.rIOSDateStringFormat=r.rIOSDateStringFormat;exports.rInteger=r.rInteger;exports.rMobilePhone=r.rMobilePhone;exports.rPhone=r.rPhone;exports.rPostcode=r.rPostcode;exports.rTelephone=r.rTelephone;exports.rUrl=r.rUrl;exports.removeSpace=or.removeSpace;exports.session=ar.session;exports.setCSS=cr.setCSS;exports.spliceString=ur.spliceString;exports.storage=lr.storage;exports.suffix=mr.suffix;exports.supportCSS=dr.supportCSS;exports.swap=qr.swap;exports.throttle=pr.throttle;exports.timeDistance=Sr.timeDistance;exports.toCSSUnit=br.toCSSUnit;exports.toDate=hr.toDate;exports.toMultiKeyOneValue=gr.toMultiKeyOneValue;exports.toNumber=yr.toNumber;exports.toRawType=Pr.toRawType;exports.toTypeString=Ir.toTypeString;exports.unique=Or.unique;exports.url2http=Nr.url2http;exports.url2https=Dr.url2https;exports.VERSION=fr;
