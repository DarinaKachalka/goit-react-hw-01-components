import css from '../FriendList/FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={css.item}>
        <span
          className={isOnline ? css.status_online : css.status_offline}
        ></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  };