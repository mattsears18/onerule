import React from 'react';
import { useQuery, gql } from '@apollo/client';

const RULES = gql`
  query GetRules {
    rules_aggregate {
      aggregate {
        count
      }
    }
    rules {
      id
      name
      is_public
      created_at
      updated_at
      user_creator {
        id
        name
      }
    }
  }
`;

const ListRules: React.FC = () => {
  const { loading, error, data } = useQuery(RULES);

  if (loading) return <p>Loading...</p>;
  if (error) {
    throw error;
  }

  return (
    <div>
      <h4>Rules ({data.rules_aggregate.aggregate.count})</h4>
      {data?.rules?.length &&
        data.rules.map((rule: { id: string; name: string }) => {
          return <div key={rule.id}>{rule.name}</div>;
        })}
    </div>
  );
};

export default ListRules;
