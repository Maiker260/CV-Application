export default function Icons({pathInfo, classIcon = "icon"}) {
    return (
        <div className="icon-container">
            <svg className={classIcon} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000">
                <path d={pathInfo}/>
            </svg>
        </div>
    )
}