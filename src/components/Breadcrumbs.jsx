import { Link, useMatches } from "react-router-dom";

// ul 

import classes from "./Breadcrumbs.module.scss"

export default function Breadcrumbs() {
  const matches = useMatches();
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => ({
      crumbName: match.handle.crumb(match.data),
      pathname: match.pathname,
    }));

  return (
    <ul className={classes["breadcrumb-wrapper"]}>
      {crumbs.map((crumb, index) => (
        <li key={index}>
          {index < crumbs.length - 1 ? (
            <Link to={crumb.pathname}>{crumb.crumbName}</Link>
          ) : (
            <span>{crumb.crumbName}</span>
          )}
          {index < crumbs.length - 1 && " > "}
        </li>
      ))}
    </ul>
  );
}