// import css from './Section.module.css';
import PropTypes from "prop-types";

// import { Component } from 'react';

// class Section extends Component {
//   render() {
//     console.log("this.props: ", this.props);
//     return (
//       <section>
//         <h1 className={css.title}>{this.props.title}</h1>
//       </section>
//     );
//   }
// }

export const Section = ({ title, children }) => (
  <section>
    <h1>{title}</h1>
    {children}
  </section>
);

// правильно
// const Section = ({ title }) => (
//   <section>
//     <h1 className={css.title}>{title}</h1>
//   </section>
// );

// export default Section;


Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}