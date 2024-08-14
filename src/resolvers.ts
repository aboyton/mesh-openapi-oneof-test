import { Cat, Dog, Pet, Resolvers } from "../.mesh";
import { PetStoreTypes } from "../.mesh/sources/petStore/types";

const resolvers: Resolvers = {
  Query: {
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
      // const response: Pet = await context.petStore.Query.pets_by_id({
      //   root,
      //   args,
      //   context,
      //   info,
      // });

      // Manual cast to show that doesn't work as Dogs have a dog_exclusive field
      // const pet: Pet = undefined as any;
      // const dog: Dog = pet;

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
