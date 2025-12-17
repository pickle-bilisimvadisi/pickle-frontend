import "react";

declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    // Allows directory support
    directory?: string;
    webkitdirectory?: string;
    mozdirectory?: string;
  }
}
