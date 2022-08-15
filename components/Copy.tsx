import React from "react";
import useCopyClipboard from "../lib/useCopyClipboard";
import { ClipboardCheckIcon, ClipboardIcon } from "@heroicons/react/outline";

interface CopyProps {
  toCopy: string;
}

export default function CopyHelper({ toCopy }: CopyProps) {
  const [isCopied, setCopied] = useCopyClipboard();

  return (
    <button
      aria-label="justify"
      className="flex-start bg-gray-200"
      onClick={() => setCopied(toCopy)}
    >
      {isCopied ? (
        <ClipboardCheckIcon
          aria-hidden="true"
          className="h-4 w-4  text-black md:h-6 md:w-6"
        />
      ) : (
        <ClipboardIcon
          aria-hidden="true"
          className="inline-flex h-4 w-4   text-black md:h-6 md:w-6"
        />
      )}
    </button>
  );
}
