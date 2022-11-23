import React, { Component } from 'react';
import { connect } from 'react-redux';
class HomeFooter extends Component {
    render() {
        return (
            <div className="home-footer">
                <p>
                    &copy; 2022 Mr.Hai. More infomation, please visit facebook{' '}
                    <a href="https://www.facebook.com/hai.huynh88" target="_blank" alt="Hai Huynh" rel="noreferrer">
                        Hai Huynh
                    </a>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
