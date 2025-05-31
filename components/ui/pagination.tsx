"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

interface PaginationProps {
  pageCount: number;
}

export function Pagination({ pageCount }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const pages: number[] = [];
  const page = Number(searchParams.get("page") ?? 1);

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <ul className="flex justify-center space-x-4 font-mono text-lg">
      {pages.map((pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());

        return (
          <li key={pageNumber}>
            <Link
              href={`${pathname}?${params.toString()}`}
              className={`${
                pageNumber === page
                  ? "decoration-gray-400 underline-offset-4 underline decoration-4"
                  : ""
              } text-gray-500 dark:text-gray-400`}
            >
              {pageNumber}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
