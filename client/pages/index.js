import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { getErrorMsg } from '../store/selectors';
import { resetError } from '../store/app/app.actions';
import Layout from '../components/layouts/Layout';

const Home = ({ error, resetError }) => {
  // Detecta algun mensaje a mostrar al usuario, y se lo muestra durante 4 segundos
  useEffect(() => {
    if (error) {
      toast.error(error);
      resetError();
    }
    // eslint-disable-next-line
  }, [error]);

  return (
    <div>
      <Layout>
        <div>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: getErrorMsg(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ resetError }, dispatch);

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
