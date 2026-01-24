
// forwardRef lets your component pass a reference to one of its children. It's like giving a direct reference to a DOM element inside your component.
// start by importing the useref and forwardref from react 

// Note: Only use forwardRef when you need direct access to a DOM element. For most cases, you can use props and state instead.
import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
    <input ref={ref} {...props} />
})

function ForwardReference() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default ForwardReference;

// to be revisited again