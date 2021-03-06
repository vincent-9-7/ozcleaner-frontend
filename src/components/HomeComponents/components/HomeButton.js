import React from "react"
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
// 使用顺序：HomeButton组件使用styles里export的 {buttonStyle} ->
// -> style 使用的 theme里的配色字体方案
import {buttonStyle} from '../../../styles/styles'

export default function HomeButton() {
  const classes = buttonStyle()

  return(
    <>
      <Link href="/order">
        <Button
          className={classes.bookingButton}
          variant="contained"
          type="submit"
          id="back-to-top-anchor"
        >
          Booking from $80
        </Button>
      </Link>
    </>
  )
}