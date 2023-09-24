import React from 'react'
//it will provide some inbuild functions
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';


function Room() {
    const {roomID} =useParams();
    let myMeeting = async (element)=>{
        const appID = 199441728 ;
        const serverSecret= "12d616f0335bae8051db65221d72142c";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"Smile");
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            sharedLinks: [
            {
                name: 'Personal link',
                url: `http://localhost3000/room/${roomID}`
            },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
        });
    }
    return (
        <div ref = {myMeeting}>
            
        </div>
    )
}

export default Room
