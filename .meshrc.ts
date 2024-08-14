import { Config } from "@graphql-mesh/types/typings/config";

const config: Config = {
  additionalResolvers: ["./src/resolvers"],
  additionalTypeDefs: ["./src/schema.graphql"],
  // codegen: {
  //   skipTypename: false,
  //   nonOptionalTypename: true,
  // },
  sources: [
    {
      name: "petStore",
      handler: {
        openapi: {
          source: "./openapi.yaml",
          endpoint: "http://localhost:3000/",
        },
      },
    },
  ],
  serve: {
    browser: true,
    port: 3008,
  },
};

export default config;
