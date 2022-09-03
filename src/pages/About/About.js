import { Link, Outlet } from 'react-router-dom';

export const About = () => {
  return (
    <div>
      <h1>About content</h1>
      <ul>
        <li>
          <Link to="info">Info</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
        <li>
          <Link to="statistics">Stat</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
