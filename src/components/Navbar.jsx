import { Stack, Avatar, Link, Typography, Box, Button } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { ReactComponent as Logo } from '../logo.svg';

import BasicMenu from './BasicMenu';
import { buyOrSellMenu, refinanceMenu, betterPlusMenu } from '../utils/utils';

const Navbar = () => {
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
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={4} alignItems="center">
            <Link href="#">
              <Logo />
            </Link>
            <BasicMenu title="Buy or Sell" links={buyOrSellMenu} />
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
            >Sign in</Link>
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
    </Box>
  )
}

export default Navbar;