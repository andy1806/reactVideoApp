import React from 'react';

//functional component
/*
* This functional component takes one argument
* and returns that argument in between li's (JSX).
*
* instead of assigning the value inside props to
* a variable and later using that variable, I'm
* using ES6 {video} (destructuring).
*/
const VideoListItem = ({video, onVideoSelect}) => {

    // retrieve properties from the video object in order to be used.
    const imgUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    // in order to access properties inside props I need dot notation.
    // let video = props.video; -> old way.
    /*
    * markup (bootstrap classes) used to generate a proper way to
    * contain the data I wish to display to the user.
    */
    return (
        // thumbnail click functionality explained: 3
        /*
        * add a onClick event to the li. The onClick event should activate
        * the onVideoSelect method that was passed down all the way from App
        * component. As the onVideoSelect callback function is activated, with
        * the props.video as an argument, the function will set the state for
        * the App component.
        */
        <li onClick={() => onVideoSelect(video)} className={"list-group-item"}>
            <div className={"video-list-media"}>
                <div className={"media-left"}>
                    <img className={"media-object"} src={imgUrl}/>
                </div>

                <div className={"media-body"}>
                    <div className={"media-heading"}>
                        {videoTitle}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;