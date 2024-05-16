import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} Matthew Lowery. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
          <a class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" href="https://www.linkedin.com/in/matthew-lowery-488abb63/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          </a>
          </div>
      </div>
    </div>
</footer>

  );
}
