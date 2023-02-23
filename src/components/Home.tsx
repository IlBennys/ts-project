import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useState, useEffect } from "react"
import { Article } from "../interface/Article"
import { Link } from "react-router-dom"

const ArticleCard = () => {
  const [article, setArticle] = useState<Article[]>([])

  useEffect(() => {
    fetchArticle()
  }, [])

  const fetchArticle = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
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

  return article.map((elem, i) => {
    return (
      <Card key={i}>
        <Card.Img variant="top" src={elem.imageUrl} />
        <Card.Body>
          <Card.Title>{elem.title}</Card.Title>
          <Card.Text>{elem.summary}</Card.Text>
          <Link to={"/details"}>
            <Button variant="primary">Go Page Details</Button>
          </Link>
        </Card.Body>
      </Card>
    )
  })
}

export default ArticleCard
