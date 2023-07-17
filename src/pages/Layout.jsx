const Layout = ({children}) => {
    return ( 
        <>
            <h1>this is header</h1>
            {children}
            <h1>this is footer</h1>
        </>
     );
}
 
export default Layout;