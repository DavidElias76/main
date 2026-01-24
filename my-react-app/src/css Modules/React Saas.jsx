
// look at the MyStle.scss

// Sass files are executed on the server and sends CSS to the browser.

// Sass adds extra features to CSS like variables, nesting, mixins, and more.

import './MyStyle.scss';

function MyHeader() {
  return (
    <h1>My Header</h1>
  );
}

function MyHeaderColor() {
  return (
    <>
        <div>
        <h1>My Header 1</h1>
        <h2>My Header 2</h2>
        <h3>My Header 3</h3>
        </div>
    </>
  );
}

export {MyHeader, MyHeaderColor}

// Note: Sass files are compiled to CSS at build time.