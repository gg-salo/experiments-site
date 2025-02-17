import React from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import logo from "../static/images/logo.svg";

declare global {
  interface Window {
    ethereum: any;
  }
}

const Navigation = () => {
  const connect = () => {
    if (!window.ethereum) {
      return;
    }

    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts: string[]) => {
        console.log(accounts);
      })
      .catch((err: Error) => {
        // TO DO: Handle error
        console.error(err);
        return err;
      });
  };

  return (
    <Navbar className="container" expand>
      <NavbarBrand href="/">
        <img
          src={logo}
          alt="Ribbon Finance logo"
          className="img-fluid"
          width={48}
        />
      </NavbarBrand>
      <Button className="ml-auto" color="primary" onClick={connect}>
        Connect MetaMask
      </Button>
    </Navbar>
  );
};

export default Navigation;
