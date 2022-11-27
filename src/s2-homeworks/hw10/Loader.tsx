import s from './Loader.module.css'
import {CircularProgress} from "@mui/material";

export const Loader = () => <div className={s.loader}>
    <CircularProgress />
</div>
