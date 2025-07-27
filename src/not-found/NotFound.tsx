import { type RouteComponentProps, Link } from '@reach/router'
import './NotFound.css'

interface NotFoundProps extends RouteComponentProps {}

function NotFound(props: NotFoundProps) {
  return (
    <div className="not-found-container">
      <h1 className="title-404">404 No encontrado</h1>
      <pre className="ascii-art">
__  _<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.-.'  `; `-._  __  _<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(_,         .-:'  `; `-._<br/>
&nbsp;&nbsp;&nbsp;&nbsp;,'o"(        (_,           )<br/>
&nbsp;&nbsp;&nbsp;(__,-'      ,'o"(            )<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(       (__,-'            )<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`-'._.--._(             )<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|||  |||`-'._.--._.-'<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|||  |||<br/>
      </pre>
      <Link to="/" className="back-button">
        VOLVER AL INICIO
      </Link>
    </div>
  )
}

export default NotFound
