import { useState } from "react";

export function returnPath (choice)
{
    const [type, setType] = useState("video");
    const [path, setPath] =  useState("");

    if (choice.include(".png") || choice.include(".jpeg") || choice.include(".jpg") || choice.include(".gif"))
    {
        setType("pictures");
    }

    if (type == "video")
    {
        setPath("../../image/video/" + {choice})
    }
    else 
    {
        setPath("../../image/pictures/" + {choice});
    }

    return path

}