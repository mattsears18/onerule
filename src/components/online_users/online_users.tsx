import React from 'react';
import { useSubscription, gql } from '@apollo/client';
import './online_users.css';

const ONLINE_USERS_SUBSCRIPTION = gql`
  subscription MySubscription {
    online_users {
      name
      last_seen
    }
  }
`;

const OnlineUsers: React.FC = () => {
  const { loading, error, data } = useSubscription(ONLINE_USERS_SUBSCRIPTION);

  if (error) {
    throw error;
  }

  return (
    <div className={'online-users'}>
      <h2>Online Users ({!loading && data.online_users.length})</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.online_users.map((user: { id: string; name: string }) => {
            return <div key={user.id}>{user.name}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default OnlineUsers;
