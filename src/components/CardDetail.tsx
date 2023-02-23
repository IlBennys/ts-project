// import { Col, Card, Button, Row, Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Article } from "../interface/Article"

const CardDetail = () => {
  const [article, setArticle] = useState<Article[]>([])

  useEffect(() => {
    fetchArticle()
  }, [])

  const fetchArticle = async (props) => {
    try {
      const resp = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/details/:${props.id}`)
      if (resp.ok) {
        const data = await resp.json()
        console.log(data)
        setArticle(data)
      } else {
        console.log("error while fetching")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return <div>banaa</div>
}

export default CardDetail
