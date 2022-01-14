// import { Dispatch } from "redux";
import { getUserProfile } from "../../api/github";
import { getUserProfileAsync } from "./actions";
// import axios, {AxiosError} from "axios";
import createAsyncThunk from "../../lib/createAsyncThunk";


// export function getUserProfileThunk(username: string) {
//     return async (dispatch: Dispatch) => {
//         const {request, success, failure} = getUserProfileAsync;
//         dispatch(request());
//         try {
//             const userProfile = await getUserProfile(username);
//             dispatch(success(userProfile))
//         } catch (e: AxiosError | any) {
//             dispatch(failure(e));
//         }
//     };
// }


export const getUserProfileThunk = createAsyncThunk(getUserProfileAsync, getUserProfile)