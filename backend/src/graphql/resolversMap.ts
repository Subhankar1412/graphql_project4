import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { ProfileResolver } from './resolvers/profileResolver';

const resolverMap: IResolvers = merge(ProfileResolver);
export default resolverMap;