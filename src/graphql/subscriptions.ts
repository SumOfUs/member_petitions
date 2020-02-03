// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreatePetition = /* GraphQL */ `
  subscription OnCreatePetition {
    onCreatePetition {
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
export const onUpdatePetition = /* GraphQL */ `
  subscription OnUpdatePetition {
    onUpdatePetition {
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
export const onDeletePetition = /* GraphQL */ `
  subscription OnDeletePetition {
    onDeletePetition {
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
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction {
    onCreateAction {
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
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction {
    onUpdateAction {
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
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction {
    onDeleteAction {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
