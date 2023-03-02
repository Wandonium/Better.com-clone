import { Stack, Avatar, Link, Typography, Box, SvgIcon } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { ReactComponent as Logo } from './logo.svg';

import BasicMenu from './components/BasicMenu';

const buyOrSellMenu = [
  {
    title: "Get pre-approved",
    link: "https://better.com/start"
  },
  {
    title: "Purchase rates",
    link: "https://better.com/mortgage-rates/purchase"
  },
  {
    title: "Find an Agent",
    link: "https://better.com/with/find-an-agent"
  },
  {
    title: "Mortgage Calculator",
    link: "https://better.com/mortgage-calculator"
  },
  {
    title: "Learning Center",
    link: "https://better.com/content"
  }
];

function App() {
  return (
    <Box sx={{ px: { xs: "27px", md: "52px" }, bgcolor: "rgb(255, 253, 250)" }}>
      <Stack direction="row" justifyContent="space-between" sx={{ height: "48px", pt: "12px" }}>
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
          <Typography color="#444b48" sx={{ fontSize: 15, fontWeight: "bold" }}>Questions? We're always open.</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" color="#444b48" >
          <Typography sx={{ fontWeight: "bold" }}>$100 billion</Typography>
          <Typography>in online home loans</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center">
        <Link href="#">
            <Logo />
        </Link>
        <BasicMenu title="Buy or Sell" links={buyOrSellMenu} />
      </Stack>
    </Box>
  );
}

export default App;
