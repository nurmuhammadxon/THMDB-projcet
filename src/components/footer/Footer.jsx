import React from 'react';
import logo from '../../assets/footer THMDB logo.svg';
import { footerNavList } from '../../util/constatns';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-primary text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo & Nav Grid */}
        <div className="flex items-start justify-between gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="footer logo"
              width={130}
              height={94}
              className="mx-auto md:mx-0"
            />
          </div>

          {/* Navigation */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center md:text-left">
            {footerNavList.map((item) => (
              <div key={item.id}>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <ul className="space-y-1">
                  {item.footernav.map((itemNav) => (
                    <li key={itemNav.id}>
                      <Link
                        to={itemNav.link}
                        className="text-sm hover:underline hover:text-[#1ed5a9] transition"
                      >
                        {itemNav.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center mt-8 text-white opacity-30">
          <p>© {new Date().getFullYear()} Build 7d64203 (8679)</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
