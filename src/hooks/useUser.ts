import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getUser, setUserTags, UserData } from '../lib/firebase/user';
import { useAuth } from './useAuth';

export function useUser() {
    const queryClient = useQueryClient();
    const { authData } = useAuth();
    const { data } = useQuery(
        ['user', authData],
        () =>
            authData &&
            authData.currentUser &&
            getUser(authData.currentUser.uid),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            enabled: !!authData?.currentUser,
        }
    );

    const addUserTagsMutation = useMutation(
        async tags =>
            authData &&
            authData.currentUser &&
            data &&
            setUserTags({
                uid: authData.currentUser.uid,
                userData: data,
                tags: [...data.tags, ...tags],
            }),
        {
            onMutate: (tags: string[]) => {
                const prevUserData = queryClient.getQueryData<UserData>('user');

                if (prevUserData) {
                    queryClient.setQueryData<UserData>('user', {
                        ...prevUserData,
                        tags: [...prevUserData.tags, ...tags],
                    });
                }

                return prevUserData;
            },
        }
    );

    return {
        user: data,
        addTags: addUserTagsMutation.mutate,
    };
}
