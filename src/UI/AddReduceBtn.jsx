import React from "react";

const AddReduceBtn = ({action, bgColor="bg-white", color="text-black", hoverBg="hover:bg-zinc-300 dark:hover:bg-zinc-600", onClick}) => {
    let styleBtn = "flex items-center justify-center rounded-md w-8 h-8 text-2xl font-semibold shadow-sm duration-100 " + hoverBg + " " + bgColor + " " + color;

    return(
        <button className={styleBtn} onClick={onClick}>
            {action}
        </button>
    );
}

export default AddReduceBtn;