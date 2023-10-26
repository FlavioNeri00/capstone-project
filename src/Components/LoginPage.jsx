import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoginAction, setUsernameAction } from "../Redux/action";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    dispatch(setUsernameAction(username));
    setLogin(!login);
    dispatch(setLoginAction(login));
  };

  return (
    <>
      <Container>
        <h2 className="display-3 font-fraunces text-center mt-4 mb-5">
          Login for Scaro Community
        </h2>
        <form style={{ marginBlockEnd: "10rem" }} onSubmit={() => {}}>
          <div className="d-flex flex-column align-items-center">
            <label
              className="font-fraunces m-0 p-0"
              htmlFor="username"
              style={{ fontSize: "20px" }}
            >
              Username:
            </label>
            <input
              required
              id="username"
              name="username"
              type="text"
              className=" mb-5"
              placeholder="Inserisci il tuo username"
              style={{
                width: "20rem",
                borderTop: "0",
                borderLeft: "0",
                borderRight: "0",
                borderBottom: " 1px solid #164194",
                backgroundColor: "transparent",
                outline: 0,
              }}
              onChange={handleUsername}
            />

            <label
              className="font-fraunces m-0 p-0"
              htmlFor="password"
              style={{ fontSize: "20px" }}
            >
              Password:
            </label>
            <input
              required
              id="password"
              name="password"
              type="password"
              placeholder="Inserisci la tua password"
              className=""
              style={{
                width: "20rem",
                borderTop: "0",
                borderLeft: "0",
                borderRight: "0",
                borderBottom: " 1px solid #164194",
                backgroundColor: "transparent",
                outline: 0,
              }}
            />
          </div>

          <div
            className="d-flex justify-content-center mt-3"
            style={{ marginInlineStart: "18rem" }}
          >
            <Button
              type="submit"
              className="me-5 rounded-0 border border-0"
              style={{ backgroundColor: "#EA5045" }}
              onClick={(e) => {
                handleUsername(e);
                navigate("/community/books");
              }}
            >
              Accedi
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default LoginPage;
