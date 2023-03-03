import { useState } from 'react';
import { 
    Link, 
    MenuItem, 
    Popper, 
    Paper, 
    Grow, 
    ClickAwayListener, 
    MenuList 
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function BasicMenu({ title, links }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [rotate, setRotate] = useState(false);
  
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setRotate(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setRotate(false);
    setAnchorEl(null);
  };

  return (
    <div>
      <Link
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        underline="none"
        color="inherit"
        variant="subtitle1"
        className={rotate ? "move-up" : null}
        sx={{ 
            px: 1,
            pt: 0.5,
            // fontSize: 19,
            cursor: "pointer", 
            display: "flex", 
            justifyContent: "center",
            transition: "margin-bottom .3s"
        }}
      >
        {title} <ArrowDropDownIcon sx={{ 
            fontSize: 28,
            transition: "transform .3s" 
        }} className={rotate ? "rotate-up" : "rotate-down"} />
      </Link>
      <Popper
          open={open}
          anchorEl={anchorEl}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper elevation={3} sx={{ minWidth: "250px" }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    // autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    // onKeyDown={handleListKeyDown}
                  >
                    {
                        links.map((item, idx) => (
                          <MenuItem key={idx} selected={false}>
                            <Link 
                              href={item.link} 
                              underline="none" 
                              color="rgb(41, 43, 41)"
                              variant="subtitle1"
                              sx={{ px: "32px", py: "10px" }}
                            >
                              {item.title}
                            </Link>
                          </MenuItem>
                        ))
                    }
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    </div>
  );
}