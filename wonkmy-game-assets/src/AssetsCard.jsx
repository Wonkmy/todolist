import assets_icon from '/1.png'
import max from '/1-06.png'
import Maya from '/1-07.png'
import blender from '/1-08.png'
import ps from '/1-09.png'
export function AssetsCard(){
    return (
        <div className='card'>
            <h1 className='assets-title'>AXE</h1>
            <div className='assets-info'>
                <img src={assets_icon} alt="" className='assets-icon' />
                <div className='info-list'>
                    <span className='info-author'>作者:王启明</span>
                    <span className='info-date'>日期:2023.04.18</span>
                    <span className='info-used-software'>
                        <p className='used-software-des'>使用软件:</p>
                        <img src={max} alt="" className='used-software-icon'/>
                        <img src={Maya} alt="" className='used-software-icon'/>
                        <img src={blender} alt="" className='used-software-icon'/>
                        <img src={ps} alt="" className='used-software-icon'/>
                    </span>
                    <span className='assets-size'>资源大小:</span>
                    {/* 作者 日期 使用的软件 资源大小 下载按钮 点击进入详情*/}
                </div>
            </div>
            <div className='user-operate'>
                <button>下载资源</button>
                <button>资源详情</button>
            </div>
        </div>
    )
}