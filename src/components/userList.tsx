import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { fetchUsers } from "../redux/userSlice";
import { ThunkDispatch } from "redux-thunk";

interface User {
  id: number;
  name: string;
  email: string;
}

interface RootState {
  users: {
    users: User[];
    loading: boolean;
    status: "idle" | "pending" | "fulfilled" | "rejected";
  };
}

const UserList = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const { users, status } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
