import { topDealUsers } from "../../data";
import "./topBox.scss";
const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src="/user.jpeg" alt="" />
              <div className="userDetails">
                <span className="userName">{user.username}</span>
                <span className="userEmail">{user.email}</span>
              </div>
            </div>
            <div className="amount">${user.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
