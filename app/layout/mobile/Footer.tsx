import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
// import { gsap, TweenMax, Linear, Sine } from 'gsap';
import { gsap } from 'gsap';
import { parse } from 'query-string';
import GlobalStore from 'app/layout/global-store';

interface IMenu {
  code: string;
  name: string;
  order: number;
  link: string;
}

// const menus = [
//   {
//     code: 'mine',
//     name: 'Mine',
//     order: 1,
//   },
//   {
//     code: 'home',
//     name: 'Home',
//     order: 2,
//   },
//   {
//     code: 'mall',
//     name: 'Mall',
//     order: 3,
//   },
// ];

/**
 * curActive: [Left, Top, Right]
 */
const orderMap = {
  1: [3, 1, 2],
  2: [1, 2, 3],
  3: [2, 3, 1],
};

enum AnimateType {
  CLOCKWISE = 1,
  COUNTER_CLOCKWISE = 2
}

const animateMap = {
  '1-2': AnimateType.COUNTER_CLOCKWISE,
  '2-3': AnimateType.COUNTER_CLOCKWISE,
  '3-1': AnimateType.COUNTER_CLOCKWISE,
  '2-1': AnimateType.CLOCKWISE,
  '3-2': AnimateType.CLOCKWISE,
  '1-3': AnimateType.CLOCKWISE,
};

const LEFT = 0;
const TOP = 1;
const RIGHT = 2;

export default withRouter(Footer);

function Footer(props: RouteComponentProps): JSX.Element {
  const { history } = props;
  const { apps, currentApp } = GlobalStore.useContainer();
  const menus: IMenu[] = apps.map(({ code, title, link }, index) => {
    return {
      code,
      name: title || '',
      order: index + 1,
      link: link || '',
    };
  });
  const { page = 'home' } = parse(location.search);
  const curMenu = menus.find(item => item.code === page);
  const initialOrder: number[] = orderMap[curMenu?.order || 2];
  const [open, setOpen] = useState<boolean>(false);
  const [activeOrder, setActiveOrder] = useState(curMenu?.order || 2);

  // useEffect(() => {
  //   let { page = 'home' } = parse(location.search);
  //   const curMenu = menus.find(item => item.code === page);
  //   setActiveOrder(curMenu?.order || 2);
  // }, [location.search]);

  useEffect(() => {
    if (open === true) {
      gsap.to('.app-footer-container', {
        duration: 0.3,
        // ease: 'elastic.out(1, 0.3)',
        visibility: 'visible',
        bottom: '20px',
      });
      gsap.to('.app-footer-mask', {
        duration: 0.3,
        visibility: 'visible',
        autoAlpha: 1,
      });
      gsap.to('.menu-left', {
        duration: 0.3,
        top: '120px',
        left: '8px',
      });
      gsap.to('.menu-right', {
        duration: 0.3,
        top: '120px',
        right: '8px',
      });
      gsap.to('.menu-top', {
        duration: 0.3,
        top: '15px',
        right: '75px',
      });
    } else if (open === false) {
      gsap.to('.app-footer-container', {
        duration: 0.3,
        // ease: 'elastic.in(0.2, 0.3)',
        bottom: '-100px',
      });
      gsap.to('.app-footer-mask', {
        duration: 0.3,
        autoAlpha: 0,
      });
      gsap.to('.menu-left', {
        duration: 0.3,
        top: '70px',
        left: '2px',
      });
      gsap.to('.menu-right', {
        duration: 0.3,
        top: '70px',
        right: '2px',
      });
      gsap.to('.menu-top', {
        duration: 0.3,
        top: '15px',
        right: '75px',
      });
    }
  }, [open]);


  function handleClickMenu(): void {
    setOpen(true);
  }

  function handleClickMask(): void {
    setOpen(false);
  }

  function handleClickMenuItem({ link, order }: IMenu): void {
    if (open) {
      history.push(link);
      setActiveOrder(order);
    }
  }

  function renderMenus(): JSX.Element {
    return (
      <div className="menu-container">
        {
          (orderMap[activeOrder] as number[]).map((order, position) => {
            const classNameMap = {
              [LEFT]: 'menu-left',
              [TOP]: 'menu-top',
              [RIGHT]: 'menu-right',
            }
            const menu = menus.find(item => item.order === order);

            return menu ? (
              <span
                key={menu.code}
                className={`menu-item ${classNameMap[position]}`}
                onClick={() => handleClickMenuItem(menu)}
              >
                {menu.name}
              </span>
            ) : null;
          })
        }
      </div>
    );
  }

  return (
    <>
      <div className="app-footer-container">
        <div className="app-footer">
          <div className="outer-circle" onClick={handleClickMenu}>
            <div className="inner-circle"></div>
            {renderMenus()}
          </div>
        </div>
      </div>
      <div className="app-footer-mask" onClick={handleClickMask}></div>
    </>
  );
}
