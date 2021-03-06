import React from 'react'
import { makeStyles, Box, Grid, Typography, Link, Avatar, } from '@material-ui/core'
import { deepPurple, deepOrange } from '@material-ui/core/colors'
// import style from '../scss/Admin.module.scss'


// styles
const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: '20px',
  },
  text: {
    marginLeft: 10
  },
}))

export default function CreatBy() {
  const classes = styles()
  return (
    <Box display="flex" flexDirection="row">
      <Grid item xs={2} sm={1} className={classes.icon}>
        <Avatar className={classes.purple}>J</Avatar>
      </Grid>
      <Grid item justify="center" xs={9} sm={10} className={classes.text}>
        <Typography variant="subtitle2">CREATE BY</Typography>
        <Grid container direction="row" justify="space-between" space={5}>
          <Link href="/admin/customers" variant="subtitle2">
            Jack P.
          </Link>
          <Typography variant="subtitle2">23 hours ago</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
