/* eslint-disable max-len */
import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'


const useStyles = makeStyles((themes) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: themes.spacing(1),
    },
  },
  small: {
    width: themes.spacing(3),
    height: themes.spacing(3),
  },
  large: {
    width: themes.spacing(16),
    height: themes.spacing(16),
  },
  img:{
    margin:"auto",
  }
}))

export default function ImageAvatars() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item className={classes.img}>
          <Avatar srcSet="/broken-image.jpg" className={classes.large} />
        </Grid>
        <Grid item xs>
          <Box textAlign="center" width="100%" fontWeight="bold" fontSize={25}>
            Joshua Danial
          </Box>
        </Grid>
        <Grid item xs>
          <Box color="white" bgcolor=" #cc584e" p={1} borderRadius={15} textAlign="center">
            Staff
          </Box>
          
        </Grid>
      </Grid>
    </div>
  )
}
