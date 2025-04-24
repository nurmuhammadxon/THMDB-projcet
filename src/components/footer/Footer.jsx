import React from 'react';
import logo from '../../assets/footer THMDB logo.svg';
import { footerNavList } from '../../util/constatns'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-primary text-white pt-10 pb-3">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className='flex flex-col md:flex-row items-start justify-center gap-10'>
          <div>
            <img
              src={logo}
              alt="footer logo"
              width={130}
              height={94}
            />
          </div>
          <div className='w-full grid items-start grid-cols-2 md:grid-cols-4 gap-10'>
            {
              footerNavList.map(item => {
                return (
                  <div
                    key={item.id}
                    className='max-w-[260px] w-full'
                  >
                    <h3 className='text-xl font-bold leading-7'>{item.title}</h3>
                    <ul>
                      {
                        item.footernav.map(itemNav => (
                          <li key={itemNav.id} >
                            <Link
                             to={itemNav.link}
                             className='text-base'
                            >
                              {itemNav.title}
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="text-xs text-center mt-5 opacity-10">
          <p>© {new Date().getFullYear()} Build 7d64203 (8679)</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
