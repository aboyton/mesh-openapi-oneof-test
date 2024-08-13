import { Cat, Dog, Pet, Resolvers } from "../.mesh";

const resolvers: Resolvers = {
  Query: {
    /** A test endpoint */
    greeting: (_, { name }) => `Hello ${name} from mesh!`,

    /** From the Experience API */
    pets_by_id: async (root, args, context, info) => {
      // Returning directly works
      //   return context.petStore.Query.pets_by_id({
      //     root,
      //     args,
      //     context,
      //     info,
      //   });

      // Returning with await works
      //   return await context.petStore.Query.pets_by_id({
      //     root,
      //     args,
      //     context,
      //     info,
      //   });

      // Assigning to a variable with an explicit type works
      //   const response: Cat | Dog = await context.petStore.Query.pets_by_id({
      //     root,
      //     args,
      //     context,
      //     info,
      //   });

      const response = await context.petStore.Query.pets_by_id({
        root,
        args,
        context,
        info,
      });
      return response;
    },
  },
};

export default resolvers;
