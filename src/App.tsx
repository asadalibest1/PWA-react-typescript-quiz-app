import React from 'react'
import App1 from './App1'
import {TransProvider} from './components/store/store'
import firebase from "./sevices/firebaseService"

export default function App() {
    const messaging = firebase.messaging();
    Notification.requestPermission().then((permission) => { 
        console.log(permission)
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');
    
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    
    })
    return (
        <div>
            <TransProvider>
            <App1 />
            </TransProvider>
        </div>
    )
}
