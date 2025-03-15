import { ExpressApplication } from ".";

export default class Main {
  public static async start (...args: string[]): Promise<void> {
    const expressApp = new ExpressApplication();
    const portEnv: string | undefined = process.env.PORT;
    const portArg: string = args[0];
    const portStr: string = portEnv ?? portArg;
    const port: number = portStr ? parseInt(portStr, 10) : 3000;
    await expressApp.run(port);
  }
}
