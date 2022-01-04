import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Button, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ListGroup, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

function DashboardMain(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logout, user } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className="text-center py-1 mb-1">
        <Navbar.Brand as={Link} to="/home" className=" fw-bold fs-2">
          ClockFox
        </Navbar.Brand>
      </div>

      <Divider />

      <Divider className="mb-5" />
      {admin && <div>
        <Box>
          <Nav.Link
            as={HashLink}
            className="nav-link link-dark"
            to={`/dashboardmain/admin`}
          >
            {" "}
            Make Admin
          </Nav.Link>
        </Box>
        <Box>
          <Nav.Link
            as={HashLink}
            className="nav-link link-dark"
            to={`/dashboardmain/add_product`}
          >
            {" "}
            <AddIcon /> Add Product
          </Nav.Link>
        </Box>
        <Box>
          <Nav.Link
            as={HashLink}
            className="nav-link link-dark"
            to={`/dashboardmain/manage_products`}
          >
            Manage Products
          </Nav.Link>
        </Box>
        <Box>
          <Nav.Link
            as={HashLink}
            className="nav-link link-dark"
            to={`/dashboardmain/manage_orders`}
          >
            Manage Orders
          </Nav.Link>
        </Box>
      </div>
      }
      <div>
        <Box>
          <Nav.Link
            as={HashLink}
            className="nav-link link-dark"
            to={`/dashboardmain/my_orders`}
          >
            My Orders
          </Nav.Link>
        </Box>
        <Box>
          <Nav.Link
            as={HashLink}
            className="nav-link link-dark"
            to={`/dashboardmain/review`}
          >
            Review Product
          </Nav.Link>
        </Box>
      </div>

      <Box>
        <Link to="/home">
          <ListGroup.Item onClick={logout}>
            <LogoutIcon /> <Button>Logout</Button>
          </ListGroup.Item>
        </Link>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome {user.displayName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <div className="col-sm-12 col-lg-12" style={{ minHeight: "100vh" }}>
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}

DashboardMain.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardMain;
