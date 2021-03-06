import { makeStyles } from '@material-ui/core';
// 🌟这个文件的style只负责material UI 组件的 配色和字体和样式（从theme引用），不负责位置
// 🌟位置需要给组件加上<div calssName=""></div>，并在scss中定义

// 三种星星：
// import StarIcon from '@material-ui/icons/Star';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import StarHalfIcon from '@material-ui/icons/StarHalf';

export const navBarStyle = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: 'white',
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    marginInline: theme.spacing(30),
    [theme.breakpoints.down('md')]: {
      marginInline: 0,
    },
  },
  bookingButton: {
    color: 'white',
    background: theme.palette.primary.main,
    borderRadius: '25px',
    marginInline: '20px',
    '&:hover': {
      background: theme.palette.primary.hover,
      boxShadow: '0px 2px 10px #888888',
    },
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  buttonsBox: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

export const buttonStyle = makeStyles((theme) => ({
  primaryButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    borderRadius: '25px',
    marginInline: '25px',
    '&:hover': {
      background: theme.palette.primary.hover,
      boxShadow: '0px 2px 10px #888888',
    },
  },

  secondaryButton: {
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
    borderRadius: '25px',
    marginInline: '25px',
    '&:hover': {
      background: theme.palette.secondary.hover,
      boxShadow: '0px 2px 10px #888888',
    },
  },

  bookingButton: {
    background: theme.palette.primary.main, // #007bf5
    borderRadius: '5px',
    color: theme.palette.primary.contrastText,
    marginInline: '20px',
    paddingInline: '100px',
    '&:hover': {
      background: theme.palette.primary.hover, // #0050c1
      boxShadow: '0px 2px 10px #888',
    },
  },
}));

export const statusStyle = makeStyles((theme) => ({
  green: {
    color: 'white',
    background: theme.palette.green.main,
    borderRadius: '25px',
    paddingInline: '10px',
    disableRipple: true,
    '&:hover': {
      background: theme.palette.green.main,
    },
  },
  grey: {
    color: 'white',
    background: theme.palette.grey.main,
    borderRadius: '25px',
    paddingInline: '10px',
    disableRipple: true,
    '&:hover': {
      background: theme.palette.grey.main,
    },
  },
  red: {
    color: 'white',
    background: theme.palette.red.main,
    borderRadius: '25px',
    paddingInline: '10px',
    disableRipple: true,
    '&:hover': {
      background: theme.palette.red.main,
    },
  },
}));
