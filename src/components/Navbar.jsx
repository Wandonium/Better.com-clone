import { useState, Fragment } from 'react';
import { 
  Stack, Avatar, Link, Typography, 
  Box, Button, useMediaQuery,
  List, ListItem, ListItemButton,
  ListItemText, Drawer, Divider,
  Collapse
} from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ReactComponent as Logo } from '../logo.svg';

import BasicMenu from './BasicMenu';
import { buyOrSellMenu, refinanceMenu, betterPlusMenu } from '../utils/utils';

const Navbar = () => {
  const linksArray = [
    {title: "Buy or Sell", link: "", menu: buyOrSellMenu},
    {title: "Refinance", link: "", menu: refinanceMenu},
    {title: "HELOC", link: "https://better.com/preapproval/nxt-heloc"},
    {title: "Rates", link: "https://better.com/mortgage-rates/purchase"},
    {title: "Better+", link: "", menu: betterPlusMenu},
    {title: "Home Search", link: "https://better.comehome.com/"}
  ];

  const [openBuyOrSell, setOpenBuyOrSell] = useState(false);
  const [openRefinance, setOpenRefinance] = useState(false);
  const [openBetterPlus, setOpenBetterPlus] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);


  const links = linksArray.map((item, idx) => {
    if(item.link.length === 0) 
      return <BasicMenu key={item.link} title={item.title} links={item.menu} />
    else {
      return (
        <Link href={item.link}
          key={item.link}
          underline="none" 
          color="inherit"
          variant="subtitle1"
        >{item.title}</Link>
      )
    }
  });

  const button = (
    <Button variant="outlined" href="https://google.com"
      className="my-btn"
      sx={{
        color: "rgb(41, 43, 41)",
        height: "48px",
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 2,
        px: "16px",
        py: "0px",
        maxWidth: "200px",
        textTransform: 'none',
        border: "1px solid rgb(164, 168, 164)",
        transitionProperty: "background-color, color, box-shadow",
        transitionDuration: "300ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0.8, 0.6, 1)"
      }}
    >
      Get started
    </Button>
  );

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const toggleLink = (idx) => {
    console.log("idx: ", idx);
    switch(idx) {
      case 0: setOpenBuyOrSell(!openBuyOrSell);break;
      case 1: setOpenRefinance(!openRefinance);break;
      case 4: setOpenBetterPlus(!openBetterPlus); break;
      default: console.error("toggleLink idx error! ⛔");
    }
  };

  const list = () => (
    <Box
      sx={{ width: '80vw', bgcolor: "rgb(255, 253, 250)" }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <Link href="#" className="mobile-logo" ><Logo /></Link>
      <List>
        {linksArray.map((item, idx) => {
          if(item.link) {
            return (
              <ListItem key={item.link}>
                <ListItemButton 
                  component="a" 
                  href={item.link} 
                  sx={{ "&:hover": { bgcolor: "rgb(255, 253, 250)" }, py: 0 }}
                >
                  <ListItemText 
                    primary={item.title} 
                    primaryTypographyProps={{ fontSize: "18px" }} 
                  />
                </ListItemButton>
              </ListItem>
            )
          } else {
            let open;
            switch(idx) {
              case 0: open = openBuyOrSell;break;
              case 1: open = openRefinance;break;
              case 4: open = openBetterPlus;break;
              default: open = false;
            }

            return (
              <Fragment key={idx}>
                <ListItemButton 
                  onClick={() => toggleLink(idx)}
                  sx={{ "&:hover": { bgcolor: "rgb(255, 253, 250)" } }}
                >
                  <ListItemText 
                    primary={item.title} 
                    primaryTypographyProps={{ fontSize: "18px" }} 
                    sx={{ flex: "0 1 auto", pl: "16px" }} 
                  />
                  <ArrowDropDownIcon sx={{ 
                      fontSize: 28,
                      transition: "transform .3s" 
                  }} className={open ? "rotate-up" : "rotate-down"} />
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.menu.map(mn => (
                      <ListItemButton sx={{ pl: 4 }} href={mn.link} key={mn.link}>
                        <ListItemText primary={mn.title} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Fragment>
            )
          }
        })}
      </List>
      <Divider sx={{ mb: "24px" }} />
      <Link href="https://better.comehome.com/"
        underline="none" 
        color="inherit"
        variant="subtitle1"
        sx={{ ml: "32px", fontSize: "18px" }}
      >Sign in</Link>
      <Box className="mobile-logo" sx={{ mt: 2 }}>{button}</Box>
    </Box>
  );
  
  return (
    <Box sx={{ py: "4px" }}>
        <Stack direction="row" justifyContent="space-between" sx={{ height: "48px", py: "12px" }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ bgcolor: "#444b48", width: "24px", height: "24px" }}>
              <LocalPhoneOutlinedIcon sx={{ fontSize: 16 }} />
            </Avatar>
            <Link href="#" 
              color="#444b48" 
              sx={{ 
                fontSize: 17, 
                fontWeight: "bold", 
                textDecoration: "underline",
                textUnderlineOffset: "3px"
              }}
            >
              (415) 523 8837
            </Link>
            <Typography color="#444b48" sx={{ fontSize: 15, fontWeight: "bold" }}>
              Questions? We're always open.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" color="#444b48" >
            <Typography sx={{ fontWeight: "bold" }}>$100 billion</Typography>
            <Typography>in online home loans</Typography>
          </Stack>
        </Stack>
        {
          useMediaQuery('(min-width:1170px)') ? (
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={4} alignItems="center">
                <Link href="#"><Logo /></Link>
                {links}
              </Stack>
              <Stack direction="row" alignItems="center" sx={{ px: "27px" }}>
                <Link href="https://better.comehome.com/"
                  underline="none" 
                  color="inherit"
                  variant="subtitle1"
                  sx={{ mr: "48px" }}
                >Sign in</Link>
                {button}
              </Stack>
            </Stack>
          ) : (
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center">
                <MenuIcon sx={{ mr: "12px" }} onClick={toggleDrawer(true)} />
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  {list()}
                </Drawer>
                <Link href="#"><Logo /></Link>
              </Stack>
              {button}
            </Stack>
          )
        }
    </Box>
  )
}

export default Navbar;