import React, { useState } from "react";

export default function Notice(props) {
  const [fname, setName] = useState("fname connected with Notice Comp");
  return (
    <>
      <div className="container" style={{ backgroundColor: "gold" }}>
        <div class="jumbotron">
          <h1 class="display-4">
            {props.fname} {props.lname} {fname}
          </h1>
          <p class="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr class="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Get Started...
            </a>
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Unit ID</th>
              <th scope="col">Unit Name</th>
            </tr>
          </thead>

          {props.units.map((u, key) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{u.unit_id}</td>
                    <td>{u.unit_name}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}
