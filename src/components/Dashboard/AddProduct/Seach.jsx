import { useState } from "react";

export default function TagInput() {
    const [tags, setTags] = useState('');

    function handelKeyDown(e) {
        if (e.key !== 'ENTER') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
    }

    return (
        <div>
            {/* <div className={FCss.TagP}>
      <p>Fashion</p> <p className={FCss.CloseX}>X</p>
    </div> */}
            {tags.map((tag, index) => (
                <div className={FCss.TagP}>
                    <p>{tag}</p> <p className={FCss.CloseX}>&items;</p>
                </div>
            ))}
            <input onKeyDown={handelKeyDown} type="text" className="" placeholder="Enter tags" />
        </div>
    )
}