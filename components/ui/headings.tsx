import React from "react";

export function H1({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className="text-4xl font-bold mt-8 mb-4" {...props}>
      {children}
    </h1>
  );
}

export function H2({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className="text-3xl font-semibold mt-3 mb-2" {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className="text-2xl font-medium mt-2 mb-1" {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className="text-xl font-medium my-1" {...props}>
      {children}
    </h4>
  );
}

export function H5({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5 className="text-lg font-medium my-1" {...props}>
      {children}
    </h5>
  );
}

export function H6({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6 className="text-base font-medium my-1 text-gray-600 dark:text-gray-400" {...props}>
      {children}
    </h6>
  );
}
