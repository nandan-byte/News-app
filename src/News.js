export default function News(props)
{
    
    return (
        <div className="news">
            <div className="news-img">
                {
                    props.article.urlToImage !== null ?
                    <img src={props.article.urlToImage}/>
                    : <img src="https://th.bing.com/th/id/OIP.wDo8BJzyoOT-_7vRvgGrlgHaH0?pid=ImgDet&w=185&h=195&c=7&dpr=1.3"/>
                }
               
            </div>
            <h1>{props.article.title}</h1>

            <p>{props.article.description?.substring(0,100).concat("...")} <a href={props.article.url} target="_blank">Read more</a></p>

           

            <div className="source">
                <p>{props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>

        </div>
    )
}