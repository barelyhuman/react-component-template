import React from "react";

function Button({ children, ...props }) {
  return (
    <>
      <button {...props}>{children}</button>
      <style jsx>{`
        button {
          background: transparent;
          color: var(--accent);
          border: 2px solid var(--base-offset);
          border-radius: 4px;
          height: 32px;
          padding: 0 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          transition: all 0.2s linear;
        }

        button:hover,
        button:focus {
          background: var(--base-offset);
          color: var(--base);
          outline: var(--base);
        }
      `}</style>
    </>
  );
}

export default Button;
