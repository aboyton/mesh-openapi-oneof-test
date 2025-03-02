// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace PetStoreTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ObjMap: { input: any; output: any; }
};

export type Cat = Pet & {
  cat_exclusive: Scalars['String']['output'];
  name: Scalars['String']['output'];
  petType?: Maybe<Scalars['String']['output']>;
};

export type Pet = {
  name: Scalars['String']['output'];
  petType?: Maybe<Scalars['String']['output']>;
};

export type Dog = Pet & {
  dog_exclusive: Scalars['String']['output'];
  name: Scalars['String']['output'];
  petType?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  pets_by_id?: Maybe<Pet>;
  greeting: Scalars['String']['output'];
};


export type Querypets_by_idArgs = {
  id: Scalars['String']['input'];
};


export type QuerygreetingArgs = {
  name: Scalars['String']['input'];
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** undefined **/
  pets_by_id: InContextSdkMethod<Query['pets_by_id'], Querypets_by_idArgs, MeshContext>,
  /** undefined **/
  greeting: InContextSdkMethod<Query['greeting'], QuerygreetingArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["petStore"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
