import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId:'183739638419-dstt3cpri9si1ntuvfovnt036ps888e2.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render(){
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;