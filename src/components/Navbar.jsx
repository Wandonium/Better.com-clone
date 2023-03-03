import { useState } from 'react';
import { 
  Stack, Avatar, Link, Typography, 
  Box, Button, useMediaQuery,
  List, ListItem, ListItemButton,
  ListItemText, Drawer
} from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as Logo } from '../logo.svg';

import BasicMenu from './BasicMenu';
import { buyOrSellMenu, refinanceMenu, betterPlusMenu } from '../utils/utils';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const linksArray = [
    {title: "Buy or Sell", link: "", menu: buyOrSellMenu},
    {title: "Refinance", link: "", menu: refinanceMenu},
    {title: "HELOC", link: "https://better.com/preapproval/nxt-heloc"},
    {title: "Rates", link: "https://better.com/mortgage-rates/purchase"},
    {title: "Better+", link: "", menu: betterPlusMenu},
    {title: "Home Search", link: "https://better.comehome.com/"},
    {title: "Sign in", link: "https://better.comehome.com/"}
  ];

  const links = linksArray.map((item, idx) => {
    if(item.link.length === 0) 
      return <BasicMenu title={item.title} links={item.menu} />
    else {
      return (
        <Link href={item.link}
          underline="none" 
          color="inherit"
          variant="subtitle1"
        >{item.title}</Link>
      )
    }
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      // sx={{ }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton component="a" href="https://google.com">
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
                {/* <BasicMenu title="Buy or Sell" links={buyOrSellMenu} />
                <BasicMenu title="Refinance" links={refinanceMenu} />
                <Link href="https://better.com/preapproval/nxt-heloc"
                  underline="none" 
                  color="inherit"
                  variant="subtitle1"
                >HELOC</Link>
                <Link href="https://better.com/mortgage-rates/purchase"
                  underline="none" 
                  color="inherit"
                  variant="subtitle1"
                >Rates</Link>
                <BasicMenu title="Better+" links={betterPlusMenu} />
                <Link href="https://better.comehome.com/"
                  underline="none" 
                  color="inherit"
                  variant="subtitle1"
                >Home Search</Link>
              </Stack>
              <Stack direction="row" alignItems="center" sx={{ px: "27px" }}>
                <Link href="https://better.comehome.com/"
                  underline="none" 
                  color="inherit"
                  variant="subtitle1"
                  sx={{ mr: "48px" }}
                >Sign in</Link> */}
                {links}
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
                    textTransform: 'none',
                    border: "1px solid rgb(164, 168, 164)",
                    transitionProperty: "background-color, color, box-shadow",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0.8, 0.6, 1)"
                  }}
                >
                  Get started
                </Button>
              </Stack>
            </Stack>
          ) : (
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center">
                <MenuIcon sx={{ mr: "12px" }} onClick={toggleDrawer(true)} />
                <Drawer
                  // anchor={anchor}
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  {list()}
                </Drawer>
                <Link href="#"><Logo /></Link>
              </Stack>
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
            </Stack>
          )
        }
    </Box>
  )
}

export default Navbar;