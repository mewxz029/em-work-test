import React from 'react'
import Region from './Region'

function CollapseBox(props) {
    const { title } = props
    
    return (
        <>
            <div className="w-full flex justify-center mt-5">
                <div className="collapse w-full sm:w-4/6 border rounded-box border-base-300 collapse-arrow">
                    <input type="checkbox"/> 
                    <div className="collapse-title text-xl font-medium">
                        {title}
                    </div> 
                    <div className="collapse-content"> 
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <Region title={title}/>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default CollapseBox
