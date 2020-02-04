import { API } from "aws-amplify";

// tslint:disable
// this is an auto generated file. This will be overwritten

export const createPetition = /* GraphQL */ `
  mutation CreatePetition(
    $input: CreatePetitionInput!
    $condition: ModelPetitionConditionInput
  ) {
    createPetition(input: $input, condition: $condition) {
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
export const updatePetition = /* GraphQL */ `
  mutation UpdatePetition(
    $input: UpdatePetitionInput!
    $condition: ModelPetitionConditionInput
  ) {
    updatePetition(input: $input, condition: $condition) {
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
export const deletePetition = /* GraphQL */ `
  mutation DeletePetition(
    $input: DeletePetitionInput!
    $condition: ModelPetitionConditionInput
  ) {
    deletePetition(input: $input, condition: $condition) {
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
export const createAction = /* GraphQL */ `
  mutation CreateAction(
    $input: CreateActionInput!
    $condition: ModelActionConditionInput
  ) {
    createAction(input: $input, condition: $condition) {
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
export const updateAction = /* GraphQL */ `
  mutation UpdateAction(
    $input: UpdateActionInput!
    $condition: ModelActionConditionInput
  ) {
    updateAction(input: $input, condition: $condition) {
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
export const deleteAction = /* GraphQL */ `
  mutation DeleteAction(
    $input: DeleteActionInput!
    $condition: ModelActionConditionInput
  ) {
    deleteAction(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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


export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
