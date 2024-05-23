import React from "react";
import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GETS_CLIENTS } from "../queries/clientQueries";
import Loader from "./Loader";
export default function Clients() {
 

  const { loading, error, data } = useQuery(GETS_CLIENTS);

  if (loading) return <Loader/>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  return (
    <div>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((item) => (
              <ClientRow key={item.id} client={item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
