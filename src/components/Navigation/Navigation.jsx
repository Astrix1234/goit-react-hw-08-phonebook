import { NavLink as OriginalNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from 'hooks';

const StyledNavLink = styled(OriginalNavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 24px 12px;
  font-weight: 500;
  color: white;
  font-size: 24px;
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

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledNavLink activeClassName="active" to="/">
        Home
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink activeClassName="active" to="/contacts">
          Contacts
        </StyledNavLink>
      )}
    </nav>
  );
};
