import React from 'react';
import VideoListItem from './video_list_item';

// when using functional components, the props object passed by the class component will arrive as an argument.
const VideoList = (props) => {

    // videoItems array
    /*
    * This array is the value from props. And props
    * is an argument passed by the App component as a
    * controlled element.
    * */
    const videoItems = props.videos.map((video) => {
        // return a VideoListItem component
        /*
        * The return statement returns a instance of the VideoListItem
        * component. this component is populated by video, which are
        * elements from the videoItems array.
        *
        * The line of code underneath
        * has key value, which is used to make each element unique. Also,
        * a controlled element.
        */
        return (
            <VideoListItem
                // thumbnail click functionality explained: 2
                /*Pass the obtained property(OnVideoSelect) from App component
                as a controlled element to the VideoListItem component.
                Therefore, adding a new property to the VideoListItem props.
                */
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}/>
        );
    });

    return (
        <ul className={"col-sm-4 col-md-4 col-lg-4 list-group"}>
            {videoItems}
        </ul>
    );
};

export default VideoList;