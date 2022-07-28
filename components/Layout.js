import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

const Layout = props => (
    <div>
        <AppBar />
        <Container style={{ marginTop: "3rem" }}>
            {props.children}
        </Container>
        <Footer />
   </div>
);

export default Layout;