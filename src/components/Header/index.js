import React from 'react'
import NextLink from 'next/link'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import useStyle from './style'

const Header = () => {
  const classes = useStyle()

  return (
    <Grid container alignItems='center' direction='column'>
      <Avatar classes={{ root: classes.avatarRoot }} alt="Will Naugle" src="/images/profile.jpeg" />
      <Typography classes={{ root: classes.h1Root }} component='h1' variant='h4' align='center'>Will Naugle</Typography>
      <Typography component='h2' variant='h4' align='center'>Software Engineer</Typography>
      <Grid classes={{ root: classes.linkContainerRoot}} container item>
        <Grid container justify='center' item xs={3}>
          <Link component={NextLink} href='/'><a className={classes.linkRoot}>Home</a></Link>
        </Grid>
        <Grid container justify='center' item xs={3}>
          <Link component={NextLink} href='/about'><a className={classes.linkRoot}>About</a></Link>
        </Grid>
        <Grid container justify='center' item xs={3}>
          <Link component={NextLink} href='/blog'><a className={classes.linkRoot}>Blog</a></Link>
        </Grid>
        <Grid container justify='center' item xs={3}>
          <Link component={NextLink} href='/contact'><a className={classes.linkRoot}>Contact</a></Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
