import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

const Category = ({ match }) => (
  <h1>sub category {match.params.subid}</h1>
)

const SubCategory = ({ match }) => {
  return (
    <Fragment>
      <h1>category {match.params.id}</h1>
      <ul>
        <li>
          <Link to={`/category/${match.params.id}/sub/1`}>subcategory1</Link>
        </li>
        <li>
          <Link to={`/category/${match.params.id}/sub/2`}>subcategory2</Link>
        </li>
        <li>
          <Link to={`/category/${match.params.id}/sub/3`}>subcategory3</Link>
        </li>
      </ul>

      <div>
        <Route path="/category/:id/sub/:subid" component={Category}></Route>
      </div>
    </Fragment>
  )
}

export default SubCategory;