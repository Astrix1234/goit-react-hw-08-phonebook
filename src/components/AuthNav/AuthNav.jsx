import { NavLink as OriginalNavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(OriginalNavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 24px 12px;
  font-weight: 500;
  color: white;
  font-size: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #e84a5f;

    &:hover,
    &:focus {
      color: #e84a5f;
    }
  }

  &:hover,
  &:focus {
    color: #fa9191;
  }
`;

export const AuthNav = () => {
  return (
    <div>
      <NavLink activeClassName="active" to="/register">
        Register
      </NavLink>
      <NavLink activeClassName="active" to="/login">
        Log In
      </NavLink>
    </div>
  );
};
