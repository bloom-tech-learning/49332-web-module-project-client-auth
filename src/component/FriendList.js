import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from './Friend'

class FriendList extends React.Component {
    state = {
        friends: []
    }
    
    componentDidMount() {
        axiosWithAuth()
        .get ('/friends')        
        .then (resp => {
            console.log('resp in FriendsList: ', resp);
            this.setState({
                ...this.state,
                friends: resp.data
              })                 
        })
        .catch (err => console.log(err))
    };

    render () {
        return (
            <div>
                
                {
                    this.state.friends.map(friend => {
                        return (
                            <Friend key={friend.id} friend={friend}  />
                        )
                    })
                }

            </div>
        )
    }
}

export default FriendList;