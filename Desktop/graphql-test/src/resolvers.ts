import { buildSchemaFromTypeDefinitions } from "apollo-server-express";
import * as bcrypt from "bcrypt";

interface LoginArguments {
  email: string;
  password: string;
}

export const resolvers = {
  Query: {
    login: async (_: any, args: LoginArguments) => {
      console.log(args);

      const fakeEmailFromDb = "test@test.com";
      const fakePasswordFromDb = await bcrypt.has("test", 10);

      if (email !== fakeEmailFromDb) {
        throw new Error(`Usert with email: ${email} does not exist`);
      }
      const valid = await bcrypt.compare(password, fakePasswordFromDb);

      if (!valid) {
        throw new Error("Email and password do not match");
      }

      return {
        email: "fakeEmailFromDB",
        accessToken: "askdfjasdlkf",
      };
    },
  },
};
