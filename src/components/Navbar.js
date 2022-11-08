import './Navbar.css';


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function DropdownButton({ text, goto }) {
    return <Link to={goto} className=''>{text}</Link>
}

function Dropdown({ children }) {
    return <>
        <div className='dropdown'>
            {children.map((child, i) => <DropdownButton text={child.text} goto={child.goto} key={i} />)}
        </div>
    </>
}

function NavigationButton({ text, goto, selected, setSelected, children }) {
    const navigate = useNavigate();

    return <div className='relative flex justify-center group h-full items-center'>
        <div onClick={() => {
            setSelected(goto);
            navigate(goto);
        }}>
            <p className={`
                ${selected === goto ? 'text-lblue' : 'text-lblue hover:text-white/75 cursor-pointer '} 
                text-xl select-none duration-500 transition-all
            `}>{text}</p>
        </div>
        {children}
    </div>
}

export default function Navbar() {
    const pages = [
      {
        text: "Dom's Blog Website",
      },
        {
            text: 'Home',
            goto: '/'
        },
        {
            text: 'Programming ▾',
            dropdown: [
                {
                    text: 'C',
                    goto: '/Programming/c',
                },
                {
                    text: 'Python',
                    goto: '/Programming/python',
                },
                {
                  text: 'HTML/CSS',
                  goto: '/Programming/html',
                },
                {
                    text: 'JavaScript',
                    goto: '/Programming/javascript',
                }
            ]
        },
        {
            text: 'Content Areas ▾',
            dropdown: [
                {
                    text: 'CA1 - CA4',
                    goto: '/Content Areas/1-4',
                },
                {
                    text: 'CA5 - CA8',
                    goto: '/Content Areas/5-8',
                }
            ]
        },
        {
          text: 'Projects ▾',
          dropdown: [
              {
                  text: 'UX',
                  goto: '/Projects/ux',
              },
              {
                  text: 'Apps',
                  goto: '/Projects/apps',
              },
              {
                text: 'Challenges',
                goto: '/Projects/challenges',
              },
              {
                text: 'Misc',
                goto: '/Projects/misc',
              }
          ]
        },
        {
            text: 'Placement',
            goto: '/Placement'
        },
        {
          text: 'Events',
          goto: '/Events'
        },
        {
          text: 'Blog',
          goto: '/Blog'
        },
        {
          text: 'Masterclasses',
          goto: '/Masterclasses'
        },
        {
          text: 'Contact',
          goto: '/Contact'
        }
    ]

    const [selected, setSelected] = useState(pages[0].goto);

    return <div className='w-screen h-24 bg-darkblack z-50 relative flex items-center p-5 space-x-5'>
        {pages.map((page, i) => <NavigationButton key={i}
            text={page.text}
            goto={page.goto}
            selected={selected}
            setSelected={setSelected}   
        >
            {page.dropdown && <Dropdown>
                {page.dropdown}
            </Dropdown>}
        </NavigationButton>)}
    </div>
}

