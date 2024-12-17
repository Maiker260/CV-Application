export default function Icons({ pathInfo, classIcon = "icon", section, index, onClick }) {
    return (
        <div className="icon-container" data-index={index} data-section={section} onClick={onClick}>
            <svg className={classIcon} data-index={index} data-section={section} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000">
                <path data-index={index} data-section={section} d={pathInfo}/>
            </svg>
        </div>
    )
}