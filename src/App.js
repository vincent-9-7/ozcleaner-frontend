// import logo from './logo.svg';
import './App.css'
import React from 'react'
import { Route, Switch } from 'react-router'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import HomePage from './pages/HomePage/HomePage'
import UI from './pages/UI/UI'
import OrderPage from './pages/OrderPage/OrderPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import AdminCustomersPage from './pages/AdminPage/AdminCustomersPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import theme from './styles/theme'
import AdminStaffPage from './pages/AdminPage/AdminStaffPage'
import AdminDashboardPage from "./pages/AdminPage/AdminDashboardPage"
// import ....Page from ....

function App() {
  // 使用theme方法：
  // https://kitson-broadhurst.medium.com/quickly-set-up-a-theme
  // -in-material-ui-and-access-it-in-your-components-ba0565304887

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/order" exact component={OrderPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/admin/customers" exact component={AdminCustomersPage} />
        {/* <Route path="/admin/order" exact component={AdminOrderPage} />
        <Route path="/admin/overview" exact component={AdminOverviewPage} />
        <Route path="/admin/staff" exact component={AdminStaffPage} /> */}
        <Route path="/admin/dashboard" exact component={AdminDashboardPage} />
        <Route path="/admin/staffs" exact component={AdminStaffPage} />

        <Route path="/ui" exact component={UI} />

        <Route component={ErrorPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
