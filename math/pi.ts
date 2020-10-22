import Decimal from "decimal.js";
import NodeCache from "node-cache";

const cache = new NodeCache({
    stdTTL: 0,
    checkperiod: 0,
});

Decimal.config({
    precision: 300,
});

function pi(length: number): number {
    let i = length > 0 && void 0 !== length ? length : 200;
    if (!isPositiveInt(i)) return 0;
    if (0 === i) return 3;
    let n = new Decimal(1);
    let t = new Decimal(0);
    const r = cache.get("cachedPI");
    if (r) t = r as Decimal;
    else {
        const e = Decimal.config({}).precision;
        const i = new Decimal(1);
        const r = new Decimal(2);
        const a = new Decimal(4);
        let s = new Decimal(0);
        for (let c = new Decimal(0); c.lte(e); c = c.plus(i)) {
            const e = a
                .div(s.plus(1))
                .minus(r.div(s.plus(4)))
                .minus(i.div(s.plus(5)))
                .minus(i.div(s.plus(6)));
            t = t.plus(n.times(e));
            n = n.div(16);
            s = s.plus(8);
        }
        cache.set("cachedPI", t);
    }
    i = i > 200 ? 200 : i;
    return Number(t.toPrecision(i + 2).slice(0, -1));
}

function isPositiveInt(n: number): boolean {
    return isInteger(n) && isSafeInteger(n) && n > -1;
}

function isInteger(n: number): boolean {
    return Number.isInteger(n) || (numberIsFinite(n) && Math.floor(n) === n);
}

function isSafeInteger(n: number): boolean {
    return (
        Number.isSafeInteger(n) ||
        (n !== 1 / 0 && n !== -1 / 0 && Math.abs(n) <= 9007199254740991)
    );
}

function numberIsFinite(n: number): boolean {
    return Number.isFinite(n) || !(n === 1 / 0 || n === -1 / 0);
}
