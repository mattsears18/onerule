import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './online_users_query.css';

const ONLINE_USERS = gql`
  query GetOnlineUsers {
    online_users_aggregate {
      aggregate {
        count
      }
    }
    online_users {
      name
      last_seen
    }
  }
`;

const OnlineUsersQuery: React.FC = () => {
  const { loading, error, data } = useQuery(ONLINE_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    throw error;
  }

  return (
    <div className={'online-users-query'}>
      <h2>Online Users ({data.online_users_aggregate.aggregate.count})</h2>
      <div>
        {data.online_users.map((user: { id: string; name: string }) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
    </div>
  );
};

export default OnlineUsersQuery;
