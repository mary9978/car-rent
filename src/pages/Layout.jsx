import Header from "../components/Header/Header";

const Layout = ({children}) => {
    return ( 
        <>
            <Header/>
            {children}
            <h1>this is footer</h1>
        </>
     );
}
 
export default Layout;