export class Constants {
  static localStorage(): any {
    return {
      userInfo: (): string => {
        return 'USER_INFO';
      },
      userIdentity: (): string => {
        return 'USER_IDENTITY';
      }
    };
  }
}
