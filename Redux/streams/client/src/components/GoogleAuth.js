import React from 'react';

class GoogleAuth extends React.Component{

    state = { isSignedIn: null };

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '557144828821-1tfvc0ltp1j03kutacfhgdru0vorras4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ 
            isSignedIn: this.auth.isSignedIn.get()
        });
    };

    onSignClick = () => {
        this.auth.signIn();
    };

    OnSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if(this.state.isSignedIn === null){
            return null;
        }
        else if (this.state.isSignedIn){
            return (
                <button onClick={this.OnSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        else{
            return (
                <button onClick={this.onSignClick} className="ui red google button">
                    <i className="google icon" />
                    Sign with google
                </button>
            );
        }
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;