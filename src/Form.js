import React from "react";

export default function Form() {
  return (
    <div className="form">
      <form className="search-form">
        <input
          type="text"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus="on"
        />{" "}
        <input type="submit" value="search" class="btn btn-primary" />
      </form>
    </div>
  );
}
