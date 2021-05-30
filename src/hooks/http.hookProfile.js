import { useState, useCallback} from "react"

export const useHttp = () => {
    const [loading, setLoading] = useState(false) //процесс загрузки
    const [error, setError] = useState(false) //потенциальные ошибки если есть
    const [data, setData] = useState('') // данные в дальнейшем полученные из JSON
    const [isFetching, setFetching] = useState(false) // для отображение таблицы если форма отправлена


    const request = useCallback( async (url, method = 'POST', body = null, headers = {}) => {
        setLoading(true)
        try{
            if(body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
          const response = await fetch(url, { method, body, headers: {'Authorization': localStorage.getItem('tokens'), 'Content-Type': 'application/json'}})

            if(response.ok){
                fetch('http://51.116.170.180:80/users/get-current-user', {
                method: 'GET',
                headers: {
                    'authorization': localStorage.getItem('tokens')
                }
            })
                .then(res => res.json())
                // .then(res1Json => this.setState({ data1: res1Json}))
                .then(userId => {
                        fetch('http://51.116.170.180:80/get-recommendations/', {
                        method: 'GET',
                        headers: {
                            'authorization': localStorage.getItem('tokens')
                        }
                    })
                    .then(res2 => res2.json())
                    .then(res2Json => setData(res2Json))
                    setTimeout(() => setFetching(true), 2000)
                    
                });
            }

          const data = await response.json()
          if(!response.ok){
              throw new Error(data.message || 'Что-то пошло не так')
          }

          setLoading(false)
          return data  //прилетает с сервера

        } catch (e){
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])
    const clearError = () => setError(null)

    return {loading, request, error, clearError, data, isFetching}
}