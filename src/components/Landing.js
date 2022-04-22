import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      Access my&nbsp;
      <Link color="inherit" href="https://www.linkedin.com/in/terry-lim-97021/">
        LinkedIn
      </Link>{' '}
      - {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Rock-Paper-Scissors',
    subheader: 'Game',
    techstack: 'React / Jest ',
    description: [
      'Simple Game of',
      'Rock-Paper-Scissors',
      '---'
    ],
    buttonText: "Rock-Paper-Scissors",
    buttonVariant: 'outlined',
  },
  {
    title: 'Energy Management',
    subheader: 'Application',
    techstack: 'React / Next.JS / MongoDB / AWS',
    description: [
      'Energy monitoring app',
      'combined with smart',
      'device control for a facility',
    ],
    buttonText: 'Energy Management',
    // buttonVariant: 'contained',
    buttonVariant: 'outlined'
  },
  {
    title: 'Bible [WIP]',
    subheader: 'Web App',
    techstack: 'Typescript / Redux / Thunk',
    description: [
      'A resource for',
      'study using the',
      'Holy Bible',
    ],
    buttonText: 'Bible App',
    buttonVariant: 'outlined',
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];


const redirect = (buttonText) => {
  if (buttonText === "Rock-Paper-Scissors") {
    window.location.href="https://rock-paper-scissors-terjnh.vercel.app/"
    return false;
  } else if(buttonText === "Energy Management") {
    window.location.href = "https://energy-monitor-app-terjnh.vercel.app/"
    return false;
  } else if(buttonText === "Bible App") {
    window.location.href = "https://bible-app-v2-terjnh.vercel.app/"
    return false;
  }
}


function LandingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 0.2 }}>
            Landing Page
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="https://www.linkedin.com/in/terry-lim-97021/"
              sx={{ my: 1, mx: 1.5 }}
            >
              LinkedIn
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="https://github.com/terjnh"
              sx={{ my: 1, mx: 1.5 }}
            >
              Github
            </Link>

          </nav>

        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Click on the links below to view my sites:
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h6" color="text.primary">
                      Built on: {tier.techstack}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth
                    variant={tier.buttonVariant}
                    onClick={() => {
                      redirect(tier.buttonText);
                    }}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {/* {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))} */}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Landing() {
  return <LandingContent />;
}