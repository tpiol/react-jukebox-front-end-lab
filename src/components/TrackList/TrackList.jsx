const TrackList = (props) => {

    return (
        <div>
            <h1>Track List</h1>
            <div>
                {!props.tracks.length ? (
                    <h2>No Tracks Yet!</h2>
                ) : (
                <ul>
                    {props.tracks.map((track) => (
                        <li key={track._id}>{track.title}</li>
                    ))}
                </ul>
            )}
            </div>
        </div>
    )
}

export default TrackList;