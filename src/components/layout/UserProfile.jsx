import { FaUserCircle } from "react-icons/fa";
import styles from "./UserProfile.module.css";
import PropTypes from "prop-types";

function UserProfile({ userName, userId }) {
  return userName.trim() !== "" || userId.trim() !== "" ? (
    <div className={styles.userProfile}>
      <FaUserCircle className={styles.userIcon} />
      <div className={styles.userInfo}>
        <span className={styles.userName}>{userName}</span>
        <span className={styles.userId}>{userId}</span>
      </div>
    </div>
  ) : null;
}

UserProfile.propTypes = {
  userName: PropTypes.string,
  userId: PropTypes.string,
};

export default UserProfile;
