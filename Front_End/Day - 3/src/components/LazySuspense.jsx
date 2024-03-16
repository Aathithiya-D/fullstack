import { Suspense } from "react";
import PropTypes from 'prop-types';
import loader from '../assets/images/Fallback.gif';
import ErrorBoundary from "./ErrorBoundary";

const LazySuspense = ({ component: Component, ...rest }) => {
  return (
    <ErrorBoundary>
     <Suspense fallback={<img src={loader} alt="loader" />}>
        <Component {...rest} />
      </Suspense>
    </ErrorBoundary>
  );
};

LazySuspense.propTypes = {
  component: PropTypes.elementType.isRequired
};

export default LazySuspense;
