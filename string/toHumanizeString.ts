function toHumanizeString(e: number): string {
    /*
        old version: return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        thanks to C4Navar#9817 for new version (https://github.com/CanCodes)
    */
    return new Intl.NumberFormat().format(e);
}
