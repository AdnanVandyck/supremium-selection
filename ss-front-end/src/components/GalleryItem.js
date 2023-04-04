import { useState } from 'react'

function GalleryItem(props) {
    let [view, SetView] = useState(false)

    return (
        <div onClick={ () => SetView(!view)} style={{'display': 'inline-block'}}>
            <p>One Supremium Selection</p>
        </div>
    )
}

export default GalleryItem