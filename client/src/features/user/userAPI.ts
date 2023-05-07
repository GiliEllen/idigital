import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CLIENT_URL } from "../../util/util";

// export const getUserByCookie = createAsyncThunk(
//     'get-user-by-cookie',
//     async () => {
//         try {
//             const { data } = await axios.get(`${CLIENT_URL}/users/get-user-by-cookie`);
//             if(!data) throw new Error("Couldn't receive data from axios POST '/get-user-by-cookie' ");
//             const { result } = data;
//             return result[0];
//         } catch (error) {
//             console.error(error);
//         }
//     }
// )
export const getUserByCookie = createAsyncThunk(
    'get-user-by-cookie',
    async () => {
        try {
            const userId = sessionStorage.getItem("id");
            console.log(userId)
            if (userId !== null) {
                const { data } = await axios.get(`${CLIENT_URL}/users/get-user-by-id/${userId}`);
                if(!data) throw new Error("Couldn't receive data from axios POST '/get-user-by-id' ");
                const { result } = data;
                return result[0];
            }
            else {
                return null
            }
            
        } catch (error) {
            console.error(error);
        }
    }
)