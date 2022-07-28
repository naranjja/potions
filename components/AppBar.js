import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import ReceiptLong from '@mui/icons-material/ReceiptLong';

export default function AppBarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Link href={"/"}>
        <a>
          <AppBar variant="app-bar" component="nav" position="static">
            <Toolbar>
                <Typography
                    variant="app-title"
                    component="div"
                    sx={{ flexGrow: 1, display: { sm: 'block' }, textAlign: "center" }}
                >
                  <ReceiptLong style={{ marginRight: 10 }} />
                    Recepii
              </Typography>
            </Toolbar>
          </AppBar>
        </a>
      </Link>
    </Box>
  );
}