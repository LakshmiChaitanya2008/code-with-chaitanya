import Link from "next/link";

const Header = function () {
  return (
    <div>
      <Link href="/">
        <a className="title">
          <h1>Code With Chaitanya</h1>
        </a>
      </Link>
    </div>
  );
};

export default Header;
