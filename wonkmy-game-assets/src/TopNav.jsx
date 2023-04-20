export function TopNav({onClick}){
    return (
        <div className="nav-frame">
            <button className="btn-upload-assets" onClick={onClick}>
                +
            </button>
        </div>
    )
}