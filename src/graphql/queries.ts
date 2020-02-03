// tslint:disable
// this is an auto generated file. This will be overwritten

export const getPetition = /* GraphQL */ `
  query GetPetition($id: ID!) {
    getPetition(id: $id) {
      id
      name
      actions {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const listPetitions = /* GraphQL */ `
  query ListPetitions(
    $filter: ModelPetitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPetitions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        actions {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
      id
      user {
        id
        name
        email
        actions {
          nextToken
        }
      }
      petition {
        id
        name
        actions {
          nextToken
        }
      }
    }
  }
`;
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          email
        }
        petition {
          id
          name
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      actions {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        actions {
          nextToken
        }
      }
      nextToken
    }
  }
`;
