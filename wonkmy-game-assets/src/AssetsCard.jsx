export function AssetsCard({title,iconSrc,author,date,softwareIconSrc,assetsSize}){
    return (
        <div className='card'>
            <h1 className='assets-title'>{title}</h1>
            <div className='assets-info'>
                <img src={iconSrc} alt="" className='assets-icon' />
                <div className='info-list'>
                    <span className='info-author'>{author}</span>
                    <span className='info-date'>{date}</span>
                    <span className='info-used-software'>
                        <p className='used-software-des'>使用软件:</p>
                        <img src={softwareIconSrc.max} alt="" className='used-software-icon'/>
                        <img src={softwareIconSrc.Maya} alt="" className='used-software-icon'/>
                        <img src={softwareIconSrc.blender} alt="" className='used-software-icon'/>
                        <img src={softwareIconSrc.ps} alt="" className='used-software-icon'/>
                    </span>
                    <span className='assets-size'>{assetsSize}</span>
                </div>
            </div>
            <div className='user-operate'>
                <button className="btn-download" onClick={()=>{console.log("clicked!!")}}>下载资源</button>
                <span className="btn-more-info">资源详情→→→</span>
            </div>
        </div>
    )
}