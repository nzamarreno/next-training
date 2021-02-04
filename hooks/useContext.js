import * as React from "react"
import { AppContext } from "../context/appContext"

const useContext = () => React.useContext(AppContext);

export default useContext;