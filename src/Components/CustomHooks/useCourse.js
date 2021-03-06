import { useState, useEffect } from "react"
import axios from 'axios';

const useCourse= id => {

    const [state, setState] = useState({})

    useEffect(() => {
        axios
          .get(
            `http://my-json-server.typicode.com/Danitzab/db-json/cursos/${id}`
          )
          .then((resp) => setState(resp.data))
      }, [])

      return state
}

export default useCourse