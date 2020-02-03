/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePetitionInput = {
  id?: string | null,
  name: string,
};

export type ModelPetitionConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPetitionConditionInput | null > | null,
  or?: Array< ModelPetitionConditionInput | null > | null,
  not?: ModelPetitionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePetitionInput = {
  id: string,
  name?: string | null,
};

export type DeletePetitionInput = {
  id?: string | null,
};

export type CreateActionInput = {
  id?: string | null,
  actionUserId?: string | null,
  actionPetitionId?: string | null,
};

export type ModelActionConditionInput = {
  and?: Array< ModelActionConditionInput | null > | null,
  or?: Array< ModelActionConditionInput | null > | null,
  not?: ModelActionConditionInput | null,
};

export type UpdateActionInput = {
  id: string,
  actionUserId?: string | null,
  actionPetitionId?: string | null,
};

export type DeleteActionInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type ModelPetitionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPetitionFilterInput | null > | null,
  or?: Array< ModelPetitionFilterInput | null > | null,
  not?: ModelPetitionFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelActionFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelActionFilterInput | null > | null,
  or?: Array< ModelActionFilterInput | null > | null,
  not?: ModelActionFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type CreatePetitionMutationVariables = {
  input: CreatePetitionInput,
  condition?: ModelPetitionConditionInput | null,
};

export type CreatePetitionMutation = {
  createPetition:  {
    __typename: "Petition",
    id: string,
    name: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePetitionMutationVariables = {
  input: UpdatePetitionInput,
  condition?: ModelPetitionConditionInput | null,
};

export type UpdatePetitionMutation = {
  updatePetition:  {
    __typename: "Petition",
    id: string,
    name: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePetitionMutationVariables = {
  input: DeletePetitionInput,
  condition?: ModelPetitionConditionInput | null,
};

export type DeletePetitionMutation = {
  deletePetition:  {
    __typename: "Petition",
    id: string,
    name: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateActionMutationVariables = {
  input: CreateActionInput,
  condition?: ModelActionConditionInput | null,
};

export type CreateActionMutation = {
  createAction:  {
    __typename: "Action",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    petition:  {
      __typename: "Petition",
      id: string,
      name: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateActionMutationVariables = {
  input: UpdateActionInput,
  condition?: ModelActionConditionInput | null,
};

export type UpdateActionMutation = {
  updateAction:  {
    __typename: "Action",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    petition:  {
      __typename: "Petition",
      id: string,
      name: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteActionMutationVariables = {
  input: DeleteActionInput,
  condition?: ModelActionConditionInput | null,
};

export type DeleteActionMutation = {
  deleteAction:  {
    __typename: "Action",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    petition:  {
      __typename: "Petition",
      id: string,
      name: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetPetitionQueryVariables = {
  id: string,
};

export type GetPetitionQuery = {
  getPetition:  {
    __typename: "Petition",
    id: string,
    name: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPetitionsQueryVariables = {
  filter?: ModelPetitionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPetitionsQuery = {
  listPetitions:  {
    __typename: "ModelPetitionConnection",
    items:  Array< {
      __typename: "Petition",
      id: string,
      name: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetActionQueryVariables = {
  id: string,
};

export type GetActionQuery = {
  getAction:  {
    __typename: "Action",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    petition:  {
      __typename: "Petition",
      id: string,
      name: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListActionsQueryVariables = {
  filter?: ModelActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActionsQuery = {
  listActions:  {
    __typename: "ModelActionConnection",
    items:  Array< {
      __typename: "Action",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      petition:  {
        __typename: "Petition",
        id: string,
        name: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePetitionSubscription = {
  onCreatePetition:  {
    __typename: "Petition",
    id: string,
    name: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePetitionSubscription = {
  onUpdatePetition:  {
    __typename: "Petition",
    id: string,
    name: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePetitionSubscription = {
  onDeletePetition:  {
    __typename: "Petition",
    id: string,
    name: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateActionSubscription = {
  onCreateAction:  {
    __typename: "Action",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    petition:  {
      __typename: "Petition",
      id: string,
      name: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateActionSubscription = {
  onUpdateAction:  {
    __typename: "Action",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    petition:  {
      __typename: "Petition",
      id: string,
      name: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteActionSubscription = {
  onDeleteAction:  {
    __typename: "Action",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    petition:  {
      __typename: "Petition",
      id: string,
      name: string,
      actions:  {
        __typename: "ModelActionConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    actions:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};
