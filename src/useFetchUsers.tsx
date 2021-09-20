import { useCallback, useEffect, useState } from 'react';
import { continueRender, delayRender } from 'remotion';
import { RandomUsersApiResponse } from './interface';

const API_ENDPOINT = 'https://randomuser.me/api/?results=';

export const useFetchUsers = (
    userCount: number,
): {
    users: RandomUsersApiResponse | null;
} => {
    const [handle] = useState(() => delayRender());
    const [randomUsers, setRandomUsers] = useState<RandomUsersApiResponse | null>(null);

    const fetchUsers = useCallback(
        async (userCount: number) => {
            const response = await fetch(API_ENDPOINT + userCount);
            const json = await response.json();
            const fetchedUsers = json as RandomUsersApiResponse;
            setRandomUsers(fetchedUsers);
            continueRender(handle);
        },
        [handle],
    );

    useEffect(() => {
        fetchUsers(userCount);
    }, [fetchUsers, userCount]);

    return {
      users: randomUsers,
    };
};