import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    // VARIABLES
    const defaultImage = "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    // STATES
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    // FUNCTIONS
    const captializeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // document.title = `${props.category === 'general' ? "News Monkey - get the latest news for free" : captializeFirstLetter(props.category)} latest news - NewsMonkey`



    const updateNews = async () => {
        props.setProgress(24)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        setLoading(true)
        let data = await fetch(url)
        props.setProgress(57)
        let parsedData = await data.json()
        props.setProgress(77)

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100)
    }

    useEffect(() => {

        updateNews()
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResultss)
    };
    return (
        <>
            <div className="container my-3">
                <h2 className='my-3 fontSensSerif'> NewsMonkey - Top {captializeFirstLetter(props.category)} headlines </h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {
                                articles.map((element) => {
                                    return <div className="col-md-4" key={Math.random()}>
                                        <NewsItem title={element.title ? element.title.slice(0, 45) : "Not available"} description={element.description ? element.description.slice(0, 88) : "Not available"} imageUrl={!element.urlToImage ? defaultImage : element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} newsSource={element.source.name} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </InfiniteScroll>

            </div>
        </>
    )
}


News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News