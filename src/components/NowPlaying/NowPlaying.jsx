const NowPlaying = (props) => {
    if (!props.selected) {
        return (
            <div>
                <h1>NO DETAILS</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>{props.selected.title}</h1>
            <h2>{props.selected.artist}</h2>
        </div>
    )
}

export default NowPlaying;