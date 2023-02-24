import { Col, Card, Button, Row, Container } from "react-bootstrap"
import { useState, useEffect, FunctionComponent } from "react"
import { Article } from "../interface/Article"
import { SoloID } from "../interface/SoloId"

const CardDetail: FunctionComponent<SoloID> = (props) => {
  const [article, setArticle] = useState<Article[]>([])

  useEffect(() => {
    fetchArticle()
  }, [])

  const fetchArticle = async () => {
    try {
      const resp = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${props.id}`)
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
  return (
    <>
      {article.map((elem, i) => {
        return (
          <div>
            <Card key={i} style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>{elem.summary}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </>
  )
}

export default CardDetail
