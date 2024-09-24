import axios from "axios";
import { useState } from "react";

const useGara = () => {
    const [loading, setLoading] = useState(false);
    const changeGara = async () => {
        axios.get(
            "http://localhost:3000",
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }
        ).then((res) => {
            console.log(res.data)
        })
    }
    return { changeGara, loading };
}