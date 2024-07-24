import { Link, useMatches } from "react-router-dom";

import classes from "./Breadcrumbs.module.scss"

export default function Breadcrumbs() {
  const matches = useMatches();
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  return (
    <ul className={classes["breadcrumb-wrapper"]}>
      {crumbs.map((crumb, index) => (
        <li key={index}>
          {index < crumbs.length - 1 ? (
            <Link to={matches[index].pathname}>{crumb}</Link>
          ) : (
            <span>{crumb}</span>
          )}
        </li>
      ))}
    </ul>
  );
}