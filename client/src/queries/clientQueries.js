import { gql, useQuery } from "@apollo/client";


const GETS_CLIENTS = gql`
query getClients {
  clients {
    id
    name
    email
    phone
  }
}
`;

export {GETS_CLIENTS}