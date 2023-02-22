import data from '../data';

import { IResolvers } from '@graphql-tools/utils';
import { AuthenticateResponse, MutationCreateProfileArgs, QueryGetAllProfilesArgs } from '../generated';

export const ProfileResolver: IResolvers = {
    Query: {
        async getAllProfiles(_: void, args: QueryGetAllProfilesArgs): Promise<AuthenticateResponse> {
            return {
                token: "success"
            }
        }
    },
    Mutation: {
        async createProfile(_: void, args: MutationCreateProfileArgs): Promise<AuthenticateResponse> {
            return new Promise((resolve, reject) => {
                const newPfofile = args;
                const created = data.push(newPfofile);
                if (created) {
                    resolve({ token: 'created' });
                } else {
                    resolve({ token: 'faild' });
                }
            })
        }
    }
}



// Query: {
//     async getAllProfiles(_: void, args: QueryGetAllProfilesArgs) {
//         const profiles = data;
//         return profiles;
//     }
// },