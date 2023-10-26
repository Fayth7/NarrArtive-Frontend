import Navbar from "../Components/Navbar";
import PropTypes from 'prop-types';


function MainLayout({ children }) {
      return (
    <div>
        <Navbar></Navbar>
        <div>{children}</div>
    </div>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout