import Link from "next/link";

import {
  DocumentationIcon,
  APIReferenceIcon,
  APIStatus,
  APIChangelogIcon,
  SupportIcon,
} from "utils/icons";

import SingleItem from "./SingleItem";

const DevelopersDropdown = () => {
  return (
    <>
      <div className="rounded-lg rounded-b-none shadow-2xl p-8 bg-white text-gray-900 space-y-8">
        <SingleItem
          Icon={DocumentationIcon}
          primaryText="Documentation"
          secondaryText="Start integrating Stripe's products and tools."
        />
        <div className="flex justify-between w-10/12">
          <div>
            <h2 className="uppercase font-semibold text-gray-500 mb-2">
              get started
            </h2>
            <div className="gap-1 text-xs flex flex-col text-gray-500">
              <Link href="#">
                <a className="hover:text-gray-800">Pre-built checkouts</a>
              </Link>
              <Link href="#">
                <a className="hover:text-gray-800">Libraries and SDKs</a>
              </Link>
              <Link href="#">
                <a className="hover:text-gray-800">Plugins</a>
              </Link>
              <Link href="#">
                <a className="hover:text-gray-800">Code samples</a>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="uppercase font-semibold text-gray-500 mb-2">
              guides
            </h2>
            <div className="gap-1 text-xs flex flex-col text-gray-500">
              <Link href="#">
                <a className="hover:text-gray-800">Accept online payments</a>
              </Link>
              <Link href="#">
                <a className="hover:text-gray-800">Manage subscriptions</a>
              </Link>
              <Link href="#">
                <a className="hover:text-gray-800">Send payments</a>
              </Link>
              <Link href="#">
                <a className="hover:text-gray-800">Setup in-person payments</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-b-lg grid grid-cols-2 text-gray-900 p-8">
        <div>
          <div className="mb-4">
            <SingleItem
              Icon={APIReferenceIcon}
              primaryText="Full API reference"
            />
          </div>
          <SingleItem Icon={SupportIcon} primaryText="Support" />
        </div>
        <div>
          <div className="mb-4">
            <SingleItem Icon={APIStatus} primaryText="API status" />
          </div>
          <SingleItem Icon={APIChangelogIcon} primaryText="API changelog" />
        </div>
      </div>
    </>
  );
};

export default DevelopersDropdown;
