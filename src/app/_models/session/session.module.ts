export class SessionModule {
  constructor(
      public email: string,
      public role: string,
      public token: string,
  ){};
}
