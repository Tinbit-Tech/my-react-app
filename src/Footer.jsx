// the footer component is a simple React functional component that renders a footer element containing the current year and a copyright notice.


function Footer(){
return(

    <footer>
<p>&copy;{new Date().getFullYear()} ezezugn delivery</p>

    </footer>
);

}
export default Footer