import { useContext } from "react";
import { AppContext } from "../contexts/app-context";

export default function Setting() {
  const [state, dispatch] = useContext(AppContext);
  return (
    <input
      type="text"
      placeholder="Name"
      onChange={(e) =>
        dispatch({
          type: "updateUser",
          payload: { ...state.user, name: e.target.value },
        })
      }
      value={state.user.name ?? ""}
    />
  );
}
