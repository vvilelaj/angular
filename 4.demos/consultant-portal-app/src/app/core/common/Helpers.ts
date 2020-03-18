export class Helpers {
  static isNullOrEmpty(str: string | undefined | null): boolean {
    if (str === undefined || str === null || str.trim() === '') { return true; }
    return false;
  }
}
