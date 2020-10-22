function getAge(e: string): number {
    const t = new Date(),
        g = new Date(e),
        n = t.getUTCMonth() - g.getUTCMonth();
    let a = t.getUTCFullYear() - g.getUTCFullYear();
    return (n < 0 || (0 === n && t.getUTCDate() < g.getUTCDate())) && a--, a;
}
