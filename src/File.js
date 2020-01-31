import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const File = () => (
    <Query query={gql`
        {
            allLifts{
            name
            }
        }
    `}
    >
    {({loading, error, data}) => {
        if (loading) return <p>Load</p>;
        if (error) return <p>Error</p>;

        return data.allLifts.map(({name}) => (
            <div>
                <p>{name}</p>
            </div>
        ))
    }}

    </Query>

);

export default File;