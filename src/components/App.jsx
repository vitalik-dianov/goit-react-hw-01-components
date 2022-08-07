import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Box } from './Box';

export const App = () => {
  return (
    <Box width="100%" backgroundColor="backgroundPrimary">
      <Box
        position="relative"
        maxWidth={11}
        ml="auto"
        mr="auto"
        pt={5}
        pb={5}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        ></Profile>
      </Box>
      <Box
        position="relative"
        maxWidth={11}
        ml="auto"
        mr="auto"
        pt={5}
        pb={5}
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Statistics title="Upload stats" data={data}></Statistics>
        <Statistics data={data}></Statistics>
      </Box>
      <Box
        position="relative"
        maxWidth={11}
        ml="auto"
        mr="auto"
        pt={5}
        pb={5}
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <FriendList friends={friends}></FriendList>
      </Box>
      <Box
        position="relative"
        maxWidth={11}
        ml="auto"
        mr="auto"
        pt={5}
        pb={5}
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <TransactionHistory transactions={transactions}></TransactionHistory>
      </Box>
    </Box>
  );
};
