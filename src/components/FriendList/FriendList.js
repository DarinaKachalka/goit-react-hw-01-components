import css from './FriendList.module.css'
import { FriendListItem } from '../FriendListItem/FriendListItem'

export const FriendList = ({ friends }) => {
    return (
      <ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendListItem
              key={id}
              name={name}
              avatar={avatar}
              isOnline={isOnline}
            />
          );
        })}
      </ul>
    );
  };